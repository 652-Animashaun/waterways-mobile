import React from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import envs from '../../config/env';
import CustomButton from '../common/customButton/index';
import Container from '../common/container/index';
import styles from './style';


const RideDetailComponent = ({item, mapurl, handleSubmit}) => {
	

	return (
		<Container>
			<View style={{ flex: 1 }}>
		      <View style={styles.wrapper}>
		        <Text style={styles.titleWrapper}>{item.departure_jetty.name} - {item.arrival_jetty.name}</Text>
		        <Text style={styles.itemText}>Date: {item.departure_time.slice(0,10)}</Text>
		        <Text style={styles.itemText}>Departure Time: {item.departure_time.slice(11,16)}</Text>
		        <Text style={styles.itemText}>Fare: N{item.fare}</Text>
		      </View>
		      <View>
		      	<CustomButton
		      	title = "Book Now"
		      	onPress={handleSubmit}

		      	/>
		      </View>
		      <View style={{ marginTop: 30 }}>
		      	<WebView source={{ html: mapurl }} style={{height:300}} />
		      </View>
		    </View>
	    </Container>
		)
}


export default RideDetailComponent;