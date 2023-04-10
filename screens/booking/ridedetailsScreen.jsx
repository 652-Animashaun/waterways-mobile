import React, {useState, useContext} from 'react';
import {Alert} from 'react-native';
import envs from '../../config/env';
import RideDetailComponent from '../../components/ridedetails/index';
import {GlobalContext} from '../../context/provider';
import {bookBoatRide} from '../../context/actions/bookride';
import { useNavigation,useFocusEffect } from '@react-navigation/native';



const RideDetailScreen = ({route, navigation}) => {
	const {item} = route.params
	console.log('route_params', item)
	const {bookingDispatch, bookingState:{ getSchedule: {error, loading, data}}} = useContext(GlobalContext)
	const GoogleAPIKey = envs.GOOGLE_API_KEY
	const departure = `${item.schedule.departure_jetty.longitude}/${item.schedule.departure_jetty.latitude}`
	const arrival = `${item.schedule.arrival_jetty.longitude}/${item.schedule.arrival_jetty.latitude}`



	const mapUrl = `<iframe height="100%" width="100%" src= "https://www.google.com/maps/embed/v1/directions?key=${GoogleAPIKey}&origin=${item.schedule.departure_jetty.name}&destination=${item.schedule.arrival_jetty.name}"</iframe>`;


	const handleSubmit = () => {
		console.log('now Item', item.id)
		Alert.alert('Confirm Booking','You are about to book this ride', [

			{
				text: 'cancel',
				onPress: ()=>{}
			},
			{
				text: 'confirm',
				onPress: ()=>{bookBoatRide(item.id)(bookingDispatch)((response)=>{
					console.log('booking_response', response)
				})},
			}
		])
	}

	const confirmBooking = () =>{

	}

	return (
		<RideDetailComponent 
		route={route}
		item = {item.schedule}
		mapurl = {mapUrl}
		handleSubmit = {handleSubmit}
		/>
		)
}


export default RideDetailScreen;



