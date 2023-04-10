import React, {createContext, useReducer} from 'react';
import auth from './reducer/auth';
import authInitialState from './initialstate/authState';
import booking from './reducer/booking';
import bookingInitialState from './initialstate/bookingState';



export const GlobalContext = createContext();


const GlobalProvider = ({children}) => {
	const [authState, authDispatch] = useReducer(auth, authInitialState)
	const [bookingState, bookingDispatch] = useReducer(booking, bookingInitialState)
	return <GlobalContext.Provider value={{authState, authDispatch, bookingState, bookingDispatch}}>{children}</GlobalContext.Provider>
		
}

export default GlobalProvider;