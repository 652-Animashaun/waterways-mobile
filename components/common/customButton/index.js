import React, {useState} from 'react';
import { TextInput, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import colors from '../../../assets/themes/colors';

 const CustomButton = ({disabled, primary, secondary, loading, danger, title, onPress, ...props}) => {
 	const [focused, setFocused] = useState(false);
 	
 	const getBgColor = () => {
 		if (disabled){
 			return colors.secondary;
 		}

 		if (primary){
 			return colors.primary;
 		}
 		if (secondary){
 			return colors.secondary;
 		} 
 		if (danger){
 			return colors.danger;
 		}else {
 			return colors.primary;
 		}
 	}
	return (
		<TouchableOpacity disbaled={disabled} 
			style={[styles.wrapper, {backgroundColor: getBgColor()}]}
			onPress={onPress}
			>
			<View style={[styles.loadingSpinnerContainer, {paddingLeft:loading?5:0}]}>
				{loading && <ActivityIndicator />}
				{title && <Text style={{color: disabled ? "black":"white"}}>{title}</Text>}
			</View>
			
		</TouchableOpacity>

	)
}

export default CustomButton;