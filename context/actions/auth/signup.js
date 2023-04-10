import axiosInstance from '../../../helpers/axiosinterceptor';
import { 
	REGISTRATION_LOADING, 
	REGISTRATION_SUCCESSFUL, 
	REGISTRATION_FAILED, 
	CLEAR_AUTH_STATE } from '../../../constants/actionTypes';


export const clearAuthData=()=>(dispatch)=>{
	dispatch({
		type: CLEAR_AUTH_STATE
	})

}

export default ({
	email, 
	password,
	userName:username, 
	firstName:first_name, 
	lastName:last_name,
}) => (dispatch) => (onSuccess)=>{

	dispatch({
		type: REGISTRATION_LOADING,
	})

	axiosInstance.post('register', {
		email, 
		username, 
		password, 
		first_name, 
		last_name,
	})
	.then((res)=>{
		dispatch({
			type: REGISTRATION_SUCCESSFUL,
			payload: res.data,
		})
		onSuccess(res.data)
	})
	.catch((err)=>{
		console.log('err', err)

		dispatch({
			type: REGISTRATION_FAILED,
			payload: err.response ? err.response.data : {error:"something went wrong, please try again"},
		})
	})

};
