import {useContext} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainNavigator from './mainNavigator';
import { RIDE_HISTORY, HOME_NAV } from '../constants/routeName';
import SideMenu from './sidemenu/index';
import RideHistory from '../screens/ridehistory/index';
import {GlobalContext} from '../context/provider';

const getDrawerMenuItems=(navigation, authDispatch)=>{
		return <SideMenu navigation={navigation} authDispatch={authDispatch}/>
	}


const DrawerNavigation = () => {
	const {authDispatch} = useContext(GlobalContext);

	const Drawer = createDrawerNavigator();
	return (
		<Drawer.Navigator drawerContent={({navigation})=>getDrawerMenuItems(navigation, authDispatch)}>
			<Drawer.Screen name={HOME_NAV} component={MainNavigator}/>
			{/*just testing this */}
			<Drawer.Screen name={RIDE_HISTORY} component={RideHistory}/>
		</Drawer.Navigator>
		)
}

export default DrawerNavigation;