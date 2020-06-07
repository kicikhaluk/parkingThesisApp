import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as parkingActions from '../../store/actions/parking';

import SearchBar from '../../components/UI/SearchBar';
import ParkingItem from '../../components/parking/ParkingItem';
import Colors from '../../constants/Colors';

const ParkingGaragesScreen = props => {

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();
  const [searchData, setSearchData] = useState([]);

  const parkingAreas = useSelector(state => state.parking.parkingAreas);
  const dispatch = useDispatch();

  const handleSearch = text => {
    const result = parkingAreas.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));
    setSearchData(result);
  };

  const loadGarages = useCallback(async () => {
    setError(null);
    setIsRefreshing(true);
    try {
      await dispatch(parkingActions.fetchProducts());
    } catch (err) {
      setError(err.message);
    }
    setIsRefreshing(false);

  }, [dispatch, setIsLoading, setError]);

  useEffect(() => {
    setIsLoading(true);
    loadGarages().then(() => {
      setIsLoading(false);
    });
  }, [loadGarages, dispatch]);


  if (error) {
    return (
      <View style={styles.centered}>
        <Text>Something Went Wrong!</Text>
        <Button
          title="Reload"
          onPress={loadGarages}
          color={Colors.mayoralViolet}
        />
      </View>
    );
  }

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator
          size='large'
          color={Colors.mayoralViolet}
        />
      </View>
    );
  }

  return (
    // TO-DO try to wrap whole page with TouchableWithoutFeedback components
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='height'
      keyboardVerticalOffset={100}
    >
      <SearchBar onSearch={handleSearch} />
      <FlatList
        onRefresh={loadGarages}
        refreshing={isRefreshing}
        data={searchData.length === 0 ? parkingAreas : searchData}
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <ParkingItem
            garageName={itemData.item.name}
            parkInfo
            available={(itemData.item.parkingAreaInfo.filter(slot => !slot.status)).length}
            unavailable={(itemData.item.parkingAreaInfo.filter(slot => !!slot.status)).length}
            onSelect={() => {
              props.navigation.navigate('ParkingAreas');
            }}
          />
        )}
      />
    </KeyboardAvoidingView>
  );
};


export const screenOptions = {
  headerTitle: 'Parking Garages'
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});


export default ParkingGaragesScreen;