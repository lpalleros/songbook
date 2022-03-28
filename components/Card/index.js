
import React from 'react';

import { Text, View, Image } from 'react-native';
import styles from './Card.component.style';

const Card = () => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.img}
            source={require('./group.jpg')}
        />
        <View style={styles.detailContainer}>
            <Text  style={styles.title}>Lista 1</Text>
            <Text >The Rolling Stones</Text>
        </View>

    </View>
  )
}

export default Card;