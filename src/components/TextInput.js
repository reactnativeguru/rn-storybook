import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FormInput = ({onChangeText, label}) => {
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      <TextInput />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {},
});
