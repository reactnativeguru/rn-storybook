import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const Button = ({onPress = () => {}, children = ''}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text>{children}</Text>
  </TouchableOpacity>
);
export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
