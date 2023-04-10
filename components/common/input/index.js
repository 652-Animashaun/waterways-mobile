import React, {useState} from 'react';
import { TextInput, View, Text } from 'react-native';
import styles from './style';
import colors from '../../../assets/themes/colors';

 const Input = ({onChangeText, value, iconPosition, icon, style, label, error, ...props}) => {
 	const [focused, setFocused] = useState(false);
 	const getFlexDirection = () => {
 		if (icon && iconPosition){
 			if (iconPosition==="left"){
 				return "row";
 			}else{
 				return "row-reverse";
 			}
 		}
 	};
 	const getBorderColor = () => {
 		if (error){
 			return colors.danger;
 		}
 		if (focused){
 			return colors.primary;
 		} 
 		else {
 			return colors.secondary;
 		}
 	}
	return (
		<View style={styles.inputContainer}>
			{label && <Text>{label}</Text>}
			<View style={[styles.wrapper, 
				{alignItems: icon ? "center" : "start"},
				{borderColor: getBorderColor(), flexDirection: getFlexDirection()}]}>
				<View>{icon && icon}</View>
				<TextInput
					style={[styles.textInput, style]}
					onChangeText={onChangeText}
					value={value}
					onFocus={()=>{setFocused(true)}}
					onBlur={()=>{setFocused(false)}}
					{...props}
				/>
			</View>
			{error && <Text style={styles.error}>{error}</Text>}
		</View>

	)
}

export default Input;