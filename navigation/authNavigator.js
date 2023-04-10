
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN, SIGNUP} from '../constants/routeName';
import Login from '../screens/login/index';
import SignUp from '../screens/register/index';



const AuthenticationNav = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator initialRouteName={LOGIN} screenOptions={{headerShown:true}}>
			<Stack.Screen name={LOGIN} component={Login}/>
			<Stack.Screen name={SIGNUP} component={SignUp}/>

		</Stack.Navigator>
		)
}

export default AuthenticationNav;