import React, {useState} from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../common/container/index';
import Input from '../common/input/index';
import CustomButton from '../common/customButton';
import CustomMessage from '../common/message';
import styles from './style'
import { HOME, SIGNUP } from '../../constants/routeName';
import KeyboardAvoidWrapper from '../common/keyboardwrapper/keyboardavoidwrapper';


const LoginComponent = ({form, errors, onSubmit, onChange, error, loading, justSignedUp}) => {
	const [value, onChangeText] = useState('');
	const [securePassword, setSecurePassword] = useState(true)
	const {navigate} = useNavigation();

	return (
		<KeyboardAvoidWrapper>
			<Container>
				<Image source={require('../../assets/images/wwm_logo.jpeg')} style={styles.logoImage}/>
				<View>
					<Text style={styles.title}>Welcome to WWM</Text>
					<Text style={styles.subTitle}>Login here</Text>
					
					<View style={styles.form}>
						{justSignedUp && (
							<CustomMessage 
								message="Account created successfully!"
								success
								onDismiss={()=>{}}
							/>)}
						{error && !error.error && (
							<CustomMessage 
								message="Invalid credentials"
								danger
								onDismiss={()=>{}}
							/>)}
						{error?.error && <CustomMessage 
							message={error.error}
							danger
							onDismiss={()=>{}}
						/>}
						<Input
						label="Username"
						onChangeText={(value)=>onChange({name:'userName', value:value})}
						placeholder="Enter Username"
						error={errors.userName || error?.username?.[0]}
						value= {form.userName || null}
						/>

						<Input
						label="Password"
						onChangeText={(value)=>onChange({name:'password', value:value})}
						// value={value}
						icon = {<TouchableOpacity onPress={()=>setSecurePassword((prev)=>(!prev))}>
							<Text>{securePassword ? 'Show':'Hide'}</Text>
							</TouchableOpacity>}
						iconPosition = "right"
						secureTextEntry={securePassword}
						placeholder="Enter Password"
						error={errors.password || error?.password?.[0]}
						/>
						<CustomButton title="Login" 
						loading={loading} 
						disabled={loading}
						primary
						onPress={onSubmit}
						/>
						<View style={styles.registerSection}>
							<Text style={styles.infoText}>Need A New Account?</Text>
							<TouchableOpacity>
								<Text style={styles.linkBtn} onPress={()=>{navigate(SIGNUP)}}>Register</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			     
			</Container>
		</KeyboardAvoidWrapper>
	)

};

export default LoginComponent;