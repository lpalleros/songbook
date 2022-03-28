
import React from 'react';

import { Text, View, Image } from 'react-native';
import styles from './Nav.component.style';

import SVGImg from './menu.svg';

export default  function Nav() {
  return (
    <View style={styles.container}>
      <Image
        style={{width: 25, height: 25}}
        source={require('./menu.png')}
      />
      <Text style={styles.title}>SongBook</Text>
      <Image
        style={{width: 25, height: 25}}
        source={require('./menu.png')}
      />
    </View>
  )
}