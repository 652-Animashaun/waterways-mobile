import axiosInstance from '../../helpers/axiosinterceptor';

import { 
	GET_RIDE_LOADING, 
	GET_RIDE_SUCCESS, 
	GET_RIDE_FAILED, 
	 } from '../../constants/actionTypes';


export const getBoatRide=(ride_id)=>(dispatch)=>(onSuccess)=>{
	console.log('ride_id', ride_id)
	dispatch({
		type: GET_RIDE_LOADING,
	})

	axiosInstance.get(`book-ride-class/${ride_id}`)
	.then((res)=>{

		dispatch({
			type: GET_RIDE_SUCCESS,
			payload: res.data,
		})
		console.log('res>>>', res.data)
		onSuccess(res.data)

	})
	.catch((err)=>{
		dispatch({
			type: GET_RIDE_FAILED,
			payload: err.response ? err.response.data : {error:"something went wrong, please try again"}
		})
	})
	

}

export const bookBoatRide = ({ride_id}) =>(dispatch) => {

	// dispatch loading signal to button component
	dispatch({
		type: GET_RIDE_LOADING,
	})

	axiosInstance.post(`book-ride-class/${ride_id}`)
	.then((res)=>{
		console.log('res_data>>', res.data);
		dispatch({
			type: GET_RIDE_SUCCESS,
			payload: res.data,
		})

	})
	.catch((err)=>{
		console.log('err', err.response.data)

		dispatch({
			type: GET_RIDE_FAILED,
			payload: err.response ? err.response.data : {error:"something went wrong, please try again"},
		})
	})

};
