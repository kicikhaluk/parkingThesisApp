import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import Card from '../UI/Card';
import { ChevronRight } from '../icons';
import Colors from '../../constants/Colors';

const ParkingItem = props => {

  return (
    <Card style={props.style}>
      <TouchableOpacity style={styles.parkingArea} onPress={props.onSelect}>
        <View>
          <Text style={styles.parkingAreaName}>{props.garageName}</Text>
          {props.parkInfo && <View style={styles.parkInfo}>
            <Text style={styles.available}>Available:
            <Text style={styles.free}>{props.available}</Text>
            </Text>
            <Text style={styles.unavailable}>Unavailable:
              <Text style={styles.full}>{props.unavailable}</Text>
            </Text>
          </View>}
        </View>
        <ChevronRight color={Colors.mayoralViolet} />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  parkingArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  parkingAreaName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.mayoralViolet
  },
  parkInfo: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  available: {
    marginEnd: 30,
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888'
  },
  unavailable: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#888'
  },
  free: {
    color: Colors.mayoralViolet,
    fontWeight: 'bold'
  },
  full: {
    color: 'red',
    fontWeight: 'bold'
  }
});


export default ParkingItem;