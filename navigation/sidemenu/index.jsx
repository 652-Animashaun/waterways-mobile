import {SafeAreaView, View, TouchableOpacity, Text, Alert} from 'react-native';
import Container from '../../components/common/container/index';
import styles from './style';
import {RIDE_HISTORY, HOME} from '../../constants/routeName';
import { useNavigation } from '@react-navigation/native';
import logUserOut from '../../context/actions/auth/logout';



const SideMenu = ({navigation, authDispatch})=>{
	// const {navigate} = useNavigation()
	const handleLogout =()=>{
		console.log('toggleDrawer')

		navigation.toggleDrawer();
		Alert.alert('Logout!','Are you sure you want to Logout?', [

			{
				text: 'cancel',
				onPress: ()=>{}
			},
			{
				text: 'confirm',
				onPress: ()=>logUserOut()(authDispatch),
			}

		])

	}
	const menuItems = [
		{icon:<Text>T</Text>, name: "Home" , onPress:()=>navigation.navigate(HOME)},
		{icon:<Text>T</Text>, name: "RideHistory" , onPress:()=>navigation.navigate(RIDE_HISTORY)},
		{icon:<Text>T</Text>, name: "Logout" , onPress:handleLogout},
	]

	return (
		<SafeAreaView>
			<Container>
				<View>
					{menuItems.map(({icon, name, onPress})=>(
						<TouchableOpacity onPress={onPress} key={name} style={styles.item}>
							<Text>{icon}</Text>
							<Text style={styles.itemText}>{name}</Text>
						</TouchableOpacity>
					))}
				</View>
			</Container>
		</SafeAreaView>
		)

}

export default SideMenu;