import { StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';


export default StyleSheet.create({
	logoImage:{
		height: 120,
		width:300,
		alignSelf: "center",
		marginTop: 50,

	},
	title: {
		fontSize: 21,
		textAlign: "center",
		paddingTop: 20,
		fontWeight: 500,

	},
	subTitle: {
		fontSize: 17,
		textAlign: "center",
		paddingTop: 20,
		fontWeight: 500,
	},
	form:{
		paddingTop: 20,
	},
	registerSection: {
		flexDirection: "row",

	},
	infoText: {
		fontSize: 15,

	},
	linkBtn: {
		paddingLeft: 14,
		color: colors.primary,
		fontSize: 15,

	}

})