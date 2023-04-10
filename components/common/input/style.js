import { StyleSheet } from 'react-native';
import colors from '../../../assets/themes/colors'


export default StyleSheet.create({
	wrapper: {
		height: 42,
		borderColor: colors.secondary,
		borderWidth: 1,
		borderRadius: 4,
		paddingHorizontal: 5,
		marginTop: 10,
	},

	inputContainer: {

		paddingVertical: 12,

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

