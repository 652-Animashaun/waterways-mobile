import React from 'react';
import {KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard} from 'react-native';

const KeyboardAvoidWrapper = ({children}) => {
	return (
		<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					{children}
				</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
		)
}

export default KeyboardAvoidWrapper;