import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      paddingTop: 55,
      paddingHorizontal: 20,
      display: 'flex',
      flexDirection: 'row',
      height: 105,
      backgroundColor: '#E91E63'
    },
    title: {
      fontSize: 20,
      flex: 1,
      paddingLeft: 20,
      fontWeight: '600',
      color: '#fff',
    },
    icon: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
    }
});