import {StyleSheet} from 'react-native';
import colors from '../../assets/themes/colors';


export default StyleSheet.create({
	wrapper: {
		padding: 20,
		alignItems: 'center',
	},
	titleWrapper: { 
		 fontSize: 18, 
		 fontWeight: 'bold', 
		 marginBottom: 10 ,
		 color: colors.secondary,
	},
	itemText: {
		 fontSize: 16, 
		 marginBottom: 10,
		 fontWeight: 'bold', 
		 color: colors.secondary
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