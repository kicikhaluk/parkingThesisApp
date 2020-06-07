import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as parkingActions from '../../store/actions/parking';
import ParkingSlot from '../../components/parking/ParkingSlot';
import Colors from '../../constants/Colors';
import ParkSlot from '../../models/ParkSlot';

const ParkingGarageDetailScreen = props => {

  const title = props.route.params.title;

  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState();

  const parkingArea = useSelector(state => state.parking.parkingAreas);
  const dispatch = useDispatch();
  const parkingSlotsObj = parkingArea[0].parkingAreas;
  const parkingSlotArr = [];
  for (const key in parkingSlotsObj) {
    parkingSlotArr.push(new ParkSlot(
      key,
      parkingSlotsObj[key].slot,
      parkingSlotsObj[key].status
    ));
  }

  const findIndex = title => {
    if (title === "Electrical Electronics Engineering") {
      return parkingSlotArr.findIndex(item => !item.status);
    }
    for (let i = parkingSlotArr.length; i > 0; i--) {
      if (!parkingSlotArr[i - 1].status) {
        return i - 1;
      }
    }
  };

  const parkingIndex = findIndex(title);

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
    <FlatList
      style={{ marginTop: 20, marginHorizontal: 30 }}
      onRefresh={loadGarages}
      refreshing={isRefreshing}
      data={parkingSlotArr}
      keyExtractor={item => item.sid}
      renderItem={itemData => (
        <ParkingSlot
          slotName={itemData.item.sname}
          status={itemData.item.status}
          parkIndex={parkingIndex}
          itemIndex={itemData.index}
        />
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.textCenter}>Electrical Electronics Engineering</Text>
        </View>
      }
      ListFooterComponent={
        <View style={styles.footer}>
          <View style={styles.footerEE}>
            <Text style={styles.textCenter}>Environmental Engineering</Text>
          </View>
          <View style={styles.footerEE}>
            <Text style={styles.textCenter}>Entry/Exit</Text>
          </View>
        </View>
      }
    />
  );
};

export const screenOptions = navData => {
  return {
    headerTitle: navData.route.params.title
  }
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    padding: 3,
    alignSelf: 'flex-end',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.mayoralViolet,
    height: 80,
    width: 120,
    justifyContent: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  footer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  footerEE: {
    justifyContent: 'center',
    padding: 3,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Colors.mayoralViolet,
    height: 80,
    width: 120,
  }

});

export default ParkingGarageDetailScreen;