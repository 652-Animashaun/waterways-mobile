import React, {useState} from 'react';
import { TextInput, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import colors from '../../../assets/themes/colors';

 const CustomMessage = ({ retry, retryFn, onDismiss, primary, info, danger, message }) => {
 	const [focused, setFocused] = useState(false);
 	const [dismissed, setDismissed] = useState(false);
 	
 	const getBgColor = () => {

 		if (primary){
 			return colors.primary;
 		}
 		if (danger){
 			return colors.danger;
 		}
		if (info){
			return colors.primary;
 		}else {
 			return colors.primary;
 		}
 	}
	return (
		<>
		{dismissed? null:
		<TouchableOpacity
			style={[styles.wrapper, {backgroundColor: getBgColor()}]}

			>
			<View style={{flexDirection:'row', justifyContent: 'space-between'}}>
				<Text style={{color: colors.white}}>{message}</Text>
				{retry&& !onDismiss==="function"&&(
					<TouchableOpacity onPress={retryFn}>
						<Text style={{color: colors.white}}>RETRY</Text>
					</TouchableOpacity>
					)}
				{typeof onDismiss==="function"&&(
					<TouchableOpacity onPress={()=>setDismissed(true)}>
						<Text style={{color: colors.white}}>X</Text>
					</TouchableOpacity>
					)}

			</View>
			
		</TouchableOpacity>
	}
		</>


	)
};

export default CustomMessage;