
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './HomeScreen.component.style';
import { Nav, Card } from '../../components'

const Groups = [
  { 
    id: '0001',
    name: 'band1'
  },
  { 
    id: '0002',
    name: 'band2'
  },
  { 
    id: '0003',
    name: 'band3'
  },
  { 
    id: '0004',
    name: 'band4'
  },
  { 
    id: '0005',
    name: 'band5'
  },
  { 
    id: '0006',
    name: 'band6'
  },
  { 
    id: '0007',
    name: 'band7'
  },
  { 
    id: '0008',
    name: 'band8'
  },
]
export default  function HomeScreen() {
  return (
    <View style={styles.container}>
      <Nav />
      <FlatList
        data={Groups}
        renderItem={ data => (
          <TouchableOpacity>
            <View>
              <Card key={data.id}/>
            </View>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  )
}
  