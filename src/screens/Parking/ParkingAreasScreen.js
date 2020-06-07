import React from 'react';
import {
  ScrollView
} from 'react-native';

import ParkingItem from '../../components/parking/ParkingItem';

const ParkingAreasScreen = props => {

  return (
    <ScrollView>
      <ParkingItem
        garageName="Electrical Electronics Engineering"
        onSelect={() => {
          props.navigation.navigate('ParkingAreaDetail', {
            title: "Electrical Electronics Engineering"
          });
        }}
        style={{ height: 50 }}
      />
      <ParkingItem
        garageName="Environmental Engineering"
        onSelect={() => {
          props.navigation.navigate('ParkingAreaDetail', {
            title: "Environmental Engineering"
          });
        }}
        style={{ height: 50 }}
      />
    </ScrollView>
  );
};


export const screenOptions = {
  headerTitle: 'Parking Areas'
};


export default ParkingAreasScreen;