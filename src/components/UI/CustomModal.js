import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';
import Card from './Card';
import Colors from '../../constants/Colors';

const CustomModal = props => {
  return (
    <ScrollView>
      <View style={styles.modalScreen}>
        <Text style={styles.header}>Choose Your Destination</Text>
        <View style={styles.btn}>
          <TouchableOpacity onPress={props.toEEE}>
            <Text style={styles.btnText}>Electrical Electronics Engineering</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={props.toEE}>
            <Text style={styles.btnText}>Environmental Engineering</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  modalScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 1.7,
    color: Colors.accent
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.mayoralViolet
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent,
  },

});

export default CustomModal;