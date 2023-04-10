import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import Container from '../../components/common/container/index';
// import Header from './home/header';


const HomeScreen = ({navigation}) => {
    return (

          <SafeAreaView style = {styles.container}>
            <View style={styles.boxContainer}>
              <View style={styles.box}>
                <View style = {styles.inner}>
                  <Text style={styles.boxTitle}>Book Ride</Text>
                  <Button 
                  title="Booking"
                  onPress={()=>navigation.navigate('Booking')}
                  >
                  </Button>
                </View>
              </View>
              <View style={styles.box}>
                <View style = {styles.inner}>
                </View>
              </View>
            </View>
          </SafeAreaView>


      )
  };

const styles = StyleSheet.create({
	container: {
	flex: 1,
	// backgroundColor: '#fff',
	// alignItems: 'center',
	// justifyContent: 'center',
  },

  boxContainer: {
    width: '100%',
    height: '85%',
    backgroundColor: 'black',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },

  box: {
    width: '50%',
    height: '50%',
    padding: 5,
    // backgroundColor:'white',
  },

  inner: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },

  boxTitle: {

  	fontSize: 20,
  	fontWeight: 'bold',

  },
});

export default HomeScreen