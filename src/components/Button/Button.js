import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';

const Button = ({ onPress, title, disabled, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, style]}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;