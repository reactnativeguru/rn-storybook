import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import colors from '../../config/colors';

const Form = ({children, header, subheader}) => (
  <View style={styles.container}>
    {(header || subheader) && (
      <View style={styles.topRow}>
        {header && <Text style={styles.headerText}>{header}</Text>}
        {subheader && <Text style={styles.subheaderText}>{subheader}</Text>}
      </View>
    )}
    {children}
  </View>
);
export default Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  headerText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 12,
  },
  subheaderText: {
    color: colors.gray,
    fontWeight: '400',
    fontSize: 24,
    marginBottom: 12,
  },
  topRow: {
    marginBottom: 28,
  },
});
