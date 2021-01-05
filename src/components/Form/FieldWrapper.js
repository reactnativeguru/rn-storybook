import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const FieldWrapper = ({
  children,
  label = '',
  message = '',
  messageType = '',
}) => {
  const messageStyles = [styles.messageText];

  if (messageType === 'success') {
    messageStyles.push(styles.messageSuccess);
  } else if (messageType === 'error') {
    messageStyles.push(styles.messageError);
  }
  return (
    <View style={styles.container}>
      <Text>{label}</Text>
      {children}
      <Text style={messageStyles}>{message}</Text>
    </View>
  );
};
export default FieldWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 20,
  },
  labelText: {
    color: colors.gray,
    fontSize: 18,
    marginBottom: 10,
  },
  messageText: {
    color: colors.gray,
    fontSize: 13,
    marginBottom: 5,
  },
  messageSuccess: {
    color: colors.success,
  },
  messageError: {
    color: colors.error,
  },
});
