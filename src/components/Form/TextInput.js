import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FieldWrapper from './FieldWrapper';
import colors from '../../config/colors';

export default ({message, label, messageType, ...rest}) => (
  <FieldWrapper
    style={styles.container}
    label={label}
    message={message}
    messageType={messageType}>
    <TextInput {...rest} style={styles.textInput} />
    <View style={styles.border} />
  </FieldWrapper>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 14,
    fontWeight: '500',
    paddingBottom: 10,
  },
  border: {
    height: 1,
    backgroundColor: colors.border,
  },
});
