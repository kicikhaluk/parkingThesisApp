import React from 'react';
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native';

import { Search } from '../icons';
import Colors from '../../constants/Colors';

const SearchBar = props => {
  return (
    <View style={styles.searchBar}>
      <Search color={Colors.inherentAqua} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder='Search a Garage'
        placeholderTextColor={Colors.inherentAqua}
        autoCapitalize='sentences'
        maxLength={30}
        onChangeText={text => props.onSearch(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    borderRadius: 25
  },
  icon: {
    marginStart: 10,
  },
  input: {
    marginHorizontal: 5,
    flex: 1,
    color: Colors.inherentAqua
  }
});

export default SearchBar;