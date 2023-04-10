import { StyleSheet } from 'react-native';
import colors from '../../../assets/themes/colors';


export default StyleSheet.create({
	wrapper: {
		height: 42,
		paddingHorizontal: 5,
		borderRadius: 4,
		marginVertical: 5,
		paddingVertical: 13,

	},

	loadingSpinnerContainer: {

		flexDirection: "row",

	},
	textInput: {

		flex: 1,
		width: "100%",
		

	},

	error: {
		paddingTop: 5,
		fontSize: 14,
		color: colors.danger,

	}
})

