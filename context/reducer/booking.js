import { 
	VIEW_SCHEDULE_LOADING,
	VIEW_SCHEDULE_SUCCESS,
	VIEW_SCHEDULE_FAILED,
	CLEAR_SCHEDULE_FORM_STATE,
	GET_RIDE_LOADING,
	GET_RIDE_FAILED,
	GET_RIDE_SUCCESS,
} from '../../constants/actionTypes';


const booking = (state, {type, payload}) => {

	switch (type) {

		case GET_RIDE_LOADING:
		case VIEW_SCHEDULE_LOADING:
			return {...state, getSchedule: {...state.getSchedule, loading: true,}};
		case VIEW_SCHEDULE_SUCCESS:
		case GET_RIDE_SUCCESS:
			return {...state, getSchedule: {...state.getSchedule, loading:false, data:payload}};
		case VIEW_SCHEDULE_FAILED:
		case GET_RIDE_FAILED:
			return {...state, getSchedule: {...state.getSchedule, loading:false, error:payload}};
		case CLEAR_SCHEDULE_FORM_STATE:
			return {...state, getSchedule: {...state.getSchedule, loading:false, data:null, error:null}};
		default:
			return state;

	}

}

export default booking;