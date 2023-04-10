import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';



export default StyleSheet.create({
	wrapper: {
		padding: 20,
	},
	touchableWrapper: { 
		padding: 10, 
		backgroundColor: colors.primary, 
		marginVertical: 5 
	},
	itemWrapper: { 
		flexDirection: 'row', 
		justifyContent: 'space-between' 
	},
	itemText: {
		color: colors.white, 
		fontSize: 14 ,
		fontWeight: 'bold',
	},
	titleWrapper: {
		
		alignItems: 'center',

	},
	titleText: {
		color: colors.secondary, 
		fontSize: 24 ,
		fontWeight: 'bold',
		
	},
	dateTitleText: {
		color: colors.secondary, 
		fontSize: 20 ,
		
		fontWeight: 'bold',
	}

})