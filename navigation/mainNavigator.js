import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home';
import BookingScreen from '../screens/booking/bookingScreen';
import AvailableRides from '../screens/booking/availableRidesScreen';
import RideDetailScreen from '../screens/booking/ridedetailsScreen';

import { HOME, BOOKING, RIDES, VIEW_RIDE_SCHEDULE_DETAIL } from '../constants/routeName';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
	return (
			<Stack.Navigator>
				<Stack.Screen
				
				    name={HOME}
				    component={HomeScreen}
				    options={{title: 'WaterWays Mobilitity'}}
				/>
				<Stack.Screen name={BOOKING} component={BookingScreen} />
				<Stack.Screen name ={RIDES} component={AvailableRides} options={{title: "Select Ride"}}/>
				<Stack.Screen name ={VIEW_RIDE_SCHEDULE_DETAIL} component={RideDetailScreen}/>

			</Stack.Navigator>
		)
}

export default MainNavigator;