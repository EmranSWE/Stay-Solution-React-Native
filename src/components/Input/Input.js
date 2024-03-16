import React from 'react';
import { TextInput } from 'react-native';
import styles from './Input.styles';

const Input = ({ value, onChangeText, placeholder, style }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      style={[styles.input, style]}
    />
  );
};

export default Input;