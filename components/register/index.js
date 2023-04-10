import React, {useState} from 'react';
import { 
	Text, 
	View, 
	TextInput, 
	Image, 
	TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../common/container/index';
import Input from '../common/input/index';
import CustomButton from '../common/customButton';
import CustomMessage from '../common/message';
import styles from './style';
import { HOME, LOGIN } from '../../constants/routeName';
import KeyboardAvoidWrapper from '../common/keyboardwrapper/keyboardavoidwrapper';



const RegisterComponent = ({form, errors, onSubmit, onChange, error, loading}) => {
	const {navigate} = useNavigation();
	const [securePassword, setSecurePassword] = useState(true)


	return (
		<KeyboardAvoidWrapper >
			<Container>
				<Image source={require('../../assets/images/wwm_logo.jpeg')} style={styles.logoImage}/>
				<View>
					<Text style={styles.title}>Welcome to WWM</Text>
					<Text style={styles.subTitle}>Login here</Text>
					<View style={styles.form}>
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
						/>
						<Input
							label="Firstname"
							onChangeText={(value)=>onChange({name:'firstName', value:value})}
							placeholder="Enter Firstname"
							error={errors.firstName}
						/>
						<Input
							label="Lastname"
							onChangeText={(value)=>onChange({name:'lastName', value:value})}
							placeholder="Enter Lastname"
							error={errors.lastName}
						/>
						<Input
							label="Email"
							onChangeText={(value)=>onChange({name:'email', value:value})}
							placeholder="Enter Email"
							error={errors.email || error?.email?.[0]}
						/>

						<Input
							label="Password"
							onChangeText={(value)=>onChange({name:'password', value:value})}
							icon = {<TouchableOpacity onPress={()=>setSecurePassword((prev)=>(!prev))}>
							<Text>{securePassword ? 'Show':'Hide'}</Text>
							</TouchableOpacity>}
							iconPosition = "right"
							secureTextEntry={securePassword}
							placeholder="Enter Password"
							error={errors.password || error?.password?.[0]}
						/>

						<CustomButton title="Signup" 
							onPress={onSubmit}
							loading={false} 
							disabled={loading}
							loading={loading}
							primary

						/>
						<View style={styles.registerSection}>
							<Text style={styles.infoText}>Already have an account?</Text>
							<TouchableOpacity>
								<Text style={styles.linkBtn} onPress={()=>{navigate(LOGIN)}}>Login</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			     
			</Container>
		</KeyboardAvoidWrapper>
			
	)

};

export default RegisterComponent;