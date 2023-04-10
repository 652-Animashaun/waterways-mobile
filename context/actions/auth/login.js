import axiosInstance from '../../../helpers/axiosinterceptor';
import { 
	LOGIN_LOADING, 
	LOGIN_SUCCESSFUL, 
	LOGIN_FAILED } from '../../../constants/actionTypes';

import AsyncStorage from '@react-native-async-storage/async-storage';


// export const clearAuthData=()=>(dispatch)=>{
// 	dispatch({
// 		type: CLEAR_AUTH_STATE
// 	})

// }

export default ({
	password,
	userName:username, 
}) => (dispatch) => {

	dispatch({
		type: LOGIN_LOADING,
	})

	axiosInstance.post('auth/login', {
		username, 
		password, 
	})
	.then((res)=>{
		console.log('res_data>>', res.data);
		AsyncStorage.setItem('token', res.data.token);
		AsyncStorage.setItem('user', JSON.stringify(res.data.user));
		dispatch({
			type: LOGIN_SUCCESSFUL,
			payload: res.data,
		})
	})
	.catch((err)=>{
		console.log('err', err)

		dispatch({
			type: LOGIN_FAILED,
			payload: err.response ? err.response.data : {error:"something went wrong, please try again"},
		})
	})

};
