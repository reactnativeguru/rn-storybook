import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../config/colors';

const Button = ({onPress = () => {}, children = '', outline = false}) => {
  const containerStyles = [styles.container];
  const textStyle = [styles.text];

  if (outline) {
    containerStyles.push(styles.containerOutline);
    textStyle.push(styles.textOutline);
  }

  return (
    <TouchableOpacity onPress={onPress} style={containerStyles}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 7,
  },

  text: {
    color: colors.white,
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  textOutline: {
    color: colors.primary,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border,
  },
});
