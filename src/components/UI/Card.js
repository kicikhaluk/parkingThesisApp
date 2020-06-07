import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    marginHorizontal: 30,
    marginVertical: 10,
    padding: 15,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
  }
});

export default Card;