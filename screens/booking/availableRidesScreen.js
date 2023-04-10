import {useState, useContext} from 'react';
import { FlatList, StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import AvailableRidesList from '../../components/availablerides/index';
import {GlobalContext} from '../../context/provider';
import {getBoatRide, } from '../../context/actions/bookride';
import VIEW_RIDE_SCHEDULE_DETAIL from '../../constants/routeName';
import { useNavigation,useFocusEffect } from '@react-navigation/native';


const AvailableRides = ({route, navigation}) => {
	const {bookingDispatch, bookingState:{ getSchedule: {error, loading, data}}} = useContext(GlobalContext)


		// DUMMY API DATA
		// 
	// const boatRidesSchedule = [
	
	// {
	//     "id": 8,
	//     "departure_time": "2023-03-09T17:20:00Z",
	//     "arrival_time": "2023-03-09T17:55:21Z",
	//     "fare": 1100,
	//     "departure_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     },
	//     "arrival_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     }
	// },
	// {
	//     "id": 7,
	//     "departure_time": "2023-03-09T18:00:00Z",
	//     "arrival_time": "2023-03-09T19:00:00Z",
	//     "fare": 1000,
	//     "departure_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     },
	//     "arrival_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     }
	// },
	// {
	//     "id": 6,
	//     "departure_time": "2023-03-09T18:00:00Z",
	//     "arrival_time": "2023-03-09T19:00:00Z",
	//     "fare": 1000,
	//     "departure_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     },
	//     "arrival_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     }
	// },
	// {
	//     "id": 5,
	//     "departure_time": "2023-03-09T18:00:00Z",
	//     "arrival_time": "2023-03-09T19:00:00Z",
	//     "fare": 1000,
	//     "departure_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     },
	//     "arrival_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     }
	// },
	// {
	//     "id": 4,
	//     "departure_time": "2023-03-09T17:20:00Z",
	//     "arrival_time": "2023-03-09T17:55:21Z",
	//     "fare": 1100,
	//     "departure_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     },
	//     "arrival_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     }
	// },
	// {
	//     "id": 3,
	//     "departure_time": "2023-03-09T18:00:00Z",
	//     "arrival_time": "2023-03-09T19:00:00Z",
	//     "fare": 1000,
	//     "departure_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     },
	//     "arrival_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     }
	// },
	// {
	//     "id": 2,
	//     "departure_time": "2023-03-09T18:00:00Z",
	//     "arrival_time": "2023-03-09T19:00:00Z",
	//     "fare": 1000,
	//     "departure_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     },
	//     "arrival_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     }
	// },
	// {
	//     "id": 1,
	//     "departure_time": "2023-03-09T18:00:00Z",
	//     "arrival_time": "2023-03-09T19:00:00Z",
	//     "fare": 1000,
	//     "departure_jetty": {
	//         "id": 1,
	//         "name": "Oworosoki 105102",
	//         "longitude": 6.5493669886513,
	//         "latitude": 3.406539062803785
	//     },
	//     "arrival_jetty": {
	//         "id": 2,
	//         "name": "Lekki Jetty",
	//         "longitude": 6.4506182428841345,
	//         "latitude": 3.466518561558972
	//     }
	// },
	// ]

	const date = "2023-03-09T18:00:00Z"

	// deconstruct route.params
	const {schedules} = route.params

	
	return (
			<View>
				<View >
					<AvailableRidesList 
					data={schedules} 
					navigation={navigation} 
					date = {date}
					bookingdispatch={bookingDispatch}
					/>
					
				</View>
			</View>
		)
		}





export default AvailableRides;