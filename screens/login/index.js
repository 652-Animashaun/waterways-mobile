import React, {useState, useContext, useEffect} from 'react';
import { Text, View, TextInput } from 'react-native';
import LoginComponent from '../../components/login/index';
import {GlobalContext} from '../../context/provider';
import { HOME, REGISTER} from '../../constants/routeName';
import loginUser, {clearAuthData} from '../../context/actions/auth/login';
import { useNavigation,useFocusEffect, useRoute } from '@react-navigation/native';


const Login = () => {
	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});
	const [justSignedUp, setJustSignedUp] = useState(false);
	const {authDispatch, authState:{error, loading, data}} = useContext(GlobalContext)
	const {params} = useRoute()

	useEffect(()=>{
		if (params?.data){
			console.log('params', params)
			setJustSignedUp(true)
			setForm({...form, userName: params.data.username})
		}
		

	}, [params])

	const onChange=({name, value})=>{

		setForm({...form, [name]:value})
	};

	const onSubmit=()=>{

		// console.log('form:>>', form);
		if(!form.userName){
			setErrors((prev)=>{
				return {...prev, userName: "Username is required!"}
			})
		}
		if(!form.password){
			setErrors((prev)=>{
				return {...prev, password: "password is required!"}
			})
		}

		if(form.userName && form.password){
			loginUser(form)(authDispatch);

		}

	};


	return (
		<LoginComponent 
			form={form} 
			errors={errors} 
			onSubmit={onSubmit} 
			onChange={onChange} 
			error={error}
			loading={loading}
			justSignedUp={justSignedUp}
		/>
	)

};

export default Login;