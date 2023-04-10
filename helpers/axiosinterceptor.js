import * as React from 'react';
import axios from 'axios';
import envs from '../config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';




let headers = {};

const axiosInstance = axios.create({
	baseURL: envs.SERVER_URL,
	headers: headers,
});


axiosInstance.interceptors.request.use(
	async (config)=>{
		const token = await AsyncStorage.getItem("token")
		if (token){
			config.headers.Authorization=`Bearer ${token}`
			
		}
		return config
	},
	(error)=>{
		return(Promise.reject(error))
	}
	)


export default axiosInstance;

