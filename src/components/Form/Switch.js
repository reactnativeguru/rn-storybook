import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';

import FieldWrapper from './FieldWrapper';
export default ({label, message, messageType, ...rest}) => (
  <FieldWrapper
    style={styles.container}
    label={label}
    message={message}
    messageType={messageType}>
    <Switch {...rest} />
  </FieldWrapper>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
