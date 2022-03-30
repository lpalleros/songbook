
import React from 'react';

import { Text, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './Nav.component.style';

export default  function Nav() {
  return (
    <View style={styles.container}>
      <FontAwesome name='bars' color="#fff" size={22} />
      <Text style={styles.title}>SongBook</Text>
      <FontAwesome style={styles.icon} name='share' color="#fff" size={22} />
    </View>
  )
}