import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './mainNavigator';
import AuthenticationNav from './authNavigator';
import DrawerNavigator from './drawerNavigator';
import {GlobalContext} from '../context/provider';
import {ActivityIndicator} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';



const AppNavigator = () => {
	const {authState: {isLoggedIn}} = useContext(GlobalContext);
	const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
	const [authLoaded, setAuthLoaded] = useState(false)

	console.log(isLoggedIn)

	const getUser=async()=>{
		try{

			const user = await AsyncStorage.getItem("user")

			if (user){
				setAuthLoaded(true)
				setIsAuthenticated(true);

			} else{
				setAuthLoaded(true)
				setIsAuthenticated(false);
			}
		}
		catch (error){

		}
	}
	useEffect(()=>{
		getUser()
	},[isLoggedIn])


// };
	return (
	    <>
	      {authLoaded ? (
	        <NavigationContainer >
	          {isAuthenticated ? <DrawerNavigator /> : <AuthenticationNav />}
	        </NavigationContainer>
	      ) : (
	        <ActivityIndicator />
	      )}
	    </>
	  );
	};


export default AppNavigator;