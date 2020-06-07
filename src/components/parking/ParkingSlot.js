import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Colors from '../../constants/Colors';
import { ArrowUp, CornerUpRight } from '../icons';

const ParkingSlot = props => {
  const { slotName, status, parkIndex, itemIndex } = props;
  console.log(`park index ${parkIndex} - itemIndex: ${itemIndex} `);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
      {(parkIndex === itemIndex) ? <CornerUpRight style={{ marginEnd: 60 }} stroke={Colors.mayoralViolet} width='48' height='48' /> : (!(parkIndex > itemIndex - 1) && <ArrowUp style={{ marginEnd: 60 }} stroke={Colors.mayoralViolet} width='48' height='48' />)}
      {(parkIndex > itemIndex) && <View style={{ marginEnd: 108 }}></View>}
      <View style={styles.parkingSlot}>
        {!status ?
          <Image
            source={require('../../assets/images/cargreen.png')}
            style={styles.car}
          />
          :
          <Image
            source={require('../../assets/images/carred.png')}
            style={styles.car}
          />
        }
        {!status ?
          <Text style={styles.emptySlotName}>{slotName}</Text> :
          <Text style={styles.fullSlotName}>{slotName}</Text>
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parkingSlot: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.inherentAqua,
    width: 100,
    height: 100,
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1
  },
  car: {
    width: '90%',
    height: '100%'
  },
  emptySlotName: {
    width: '10%',
    color: '#2ECC71',
    fontSize: 16,
    fontWeight: 'bold'
  },
  fullSlotName: {
    marginStart: 1,
    width: '10%',
    color: '#E74C3C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default ParkingSlot;