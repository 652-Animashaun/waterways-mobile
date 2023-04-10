// import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          WaterWaysMobility
        </Text>
      </View>
      )
  };


const styles = StyleSheet.create({
  
  header: {
    width: '100%',
    height: '15%',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',

  },
  headerText: {
  	fontSize: 30,
  	fontWeight: 'bold'
  }
});

  export default Header;