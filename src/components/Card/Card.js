import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Card.styles';

const Card = ({ title, description, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;