
import React from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './Card.component.style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Card = () => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.img}
            source={require('./group.jpg')}
        />
        <View style={styles.detailContainer}>
            <Text style={styles.title}>Lista 1</Text>
            <Text>The Rolling Stones </Text>
            <TouchableOpacity style={styles.link}>
              <View>
                <Text>Ver más <FontAwesome name='arrow-right' size={16} color="#ccc"/></Text>
              </View>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default Card;