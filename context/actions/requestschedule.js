import axiosInstance from '../../helpers/axiosinterceptor';

import { 
	VIEW_SCHEDULE_LOADING, 
	VIEW_SCHEDULE_SUCCESS, 
	VIEW_SCHEDULE_FAILED, 
	CLEAR_SCHEDULE_FORM_STATE,
	 } from '../../constants/actionTypes';


export const clearScheduleViewData=()=>(dispatch)=>{
	dispatch({
		type: CLEAR_SCHEDULE_FORM_STATE
	})

}

export default ({
	departureJetty:departure_jetty,
	arrivalJetty:arrival_jetty, 
	departureDate: departure_date,
}) =>(dispatch) =>(onSuccess) => {

	// dispatch loading signal to button component
	dispatch({
		type: VIEW_SCHEDULE_LOADING,
	})

	axiosInstance.post('view-schedule', {
		departure_jetty, 
		arrival_jetty, 
		departure_date,
	})
	.then((res)=>{
		console.log('res_data>>', res.data);
		dispatch({
			type: VIEW_SCHEDULE_SUCCESS,
			payload: res.data,
		})
		onSuccess(res.data)

	})
	.catch((err)=>{
		console.log('err', err.response.data)

		dispatch({
			type: VIEW_SCHEDULE_FAILED,
			payload: err.response ? err.response.data : {error:"something went wrong, please try again"},
		})
	})

};
