import { 
	REGISTRATION_LOADING, 
	REGISTRATION_SUCCESSFUL, 
	REGISTRATION_FAILED, 
	LOGIN_LOADING,
	LOGIN_SUCCESSFUL,
	LOGIN_FAILED,
	CLEAR_AUTH_STATE,
	LOGOUT_USER, 
	VIEW_SCHEDULE_LOADING,
	VIEW_SCHEDULE_SUCCESS,
	VIEW_SCHEDULE_FAILED,
	CLEAR_SCHEDULE_FORM_STATE,
	
} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {

	switch (type) {
		case LOGIN_LOADING:
		case REGISTRATION_LOADING:
		case VIEW_SCHEDULE_LOADING:
			return {...state, loading: true,};
		case REGISTRATION_SUCCESSFUL:
		case VIEW_SCHEDULE_SUCCESS:
			return {...state, loading:false, data:payload};
		case LOGIN_SUCCESSFUL:
			return {...state, loading:false, data:payload, isLoggedIn: true};
		case REGISTRATION_FAILED:
		case LOGIN_FAILED:
		case VIEW_SCHEDULE_FAILED:
			return {...state, loading:false, error:payload};
		case CLEAR_AUTH_STATE:
		case CLEAR_SCHEDULE_FORM_STATE:
			return {...state, loading:false, data:null, error:null};
		case LOGOUT_USER:
			return {...state, loading:false, data:null, isLoggedIn: false}
		default:
			return state;


	}

}

export default auth;