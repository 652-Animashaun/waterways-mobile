import React, {useState, useEffect, useContext} from 'react';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import RegisterComponent from '../../components/register/index';
import axiosInstance from '../../helpers/axiosinterceptor';
import registerUser, {clearAuthData} from '../../context/actions/auth/signup';
import {GlobalContext} from '../../context/provider';
import { HOME, LOGIN} from '../../constants/routeName';





const SignUp = () => {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
	const {authDispatch, authState:{error, loading, data}} = useContext(GlobalContext)
	const {navigate} = useNavigation()


	// clear data, errors on return to register screen
	useFocusEffect(
		React.useCallback(()=>{
			return ()=>{
				if(data || error){
					clearAuthData()(authDispatch);
				}
			};
			
		}, [data, error])
	);

	const onChange=({name, value})=>{

		setForm({...form, [name]:value})

		if (value !==''){
			if (name ==='password' && value.length < 8){
				setErrors((prev)=>{
					return {...prev, [name]: "Password has to be at least 8 characters long!"}
				})
			}
			else {
				setErrors((prev)=>{
				return{...prev, [name]:null}
			})
			}
		}else if (value===''){
			setErrors((prev)=>{
				return{...prev, [name]:`${name} is required!`}
			})
		}else{
			setErrors((prev)=>{
				return{...prev, [name]:null}
			})

		}

	};

	const onSubmit=()=>{

		// console.log('form:>>', form);
		if(!form.userName){
			setErrors((prev)=>{
				return {...prev, userName: "Username is required!"}
			})
		}
		if(!form.email){
			setErrors((prev)=>{
				return {...prev, email: "email is required!"}
			})
		}
		if(!form.password){
			setErrors((prev)=>{
				return {...prev, password: "password is required!"}
			})
		}

		if(Object.values(errors).every(elem => !elem)&&
			Object.values(form).length>=3){
			registerUser(form)(authDispatch)((response)=>{
				navigate(LOGIN, {data:response})
			});
		}

	};
	return (

		<RegisterComponent 
			form={form} 
			errors={errors} 
			onSubmit={onSubmit} 
			onChange={onChange} 
			error={error}
			loading={loading}
		/>

		)
}


export default SignUp;