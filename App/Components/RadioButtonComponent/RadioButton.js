import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const RadioButton = ({ label, selected, onSelect }) => (
  <Pressable onPress={onSelect} style={styles.radioButton}>
    <View style={styles.radioButtonIcon}>
      {selected ? <View style={styles.radioButtonIconSelected} /> : null}
    </View>
    <Text>{label}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginLeft:"5%"
  },
  radioButtonIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  radioButtonIconSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
});

export default RadioButton;
