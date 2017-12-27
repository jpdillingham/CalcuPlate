import React, { Component} from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

class Input extends Component {
	render () {
		return (
			<View style={styles.input}>
				<TextInput 
					style = {styles.textInput}
					keyboardType = "numeric"
					underlineColorAndroid = "transparent"
					placeholder = 'Enter Desired Weight'
					placeholderTextColor = "#808080"
					autoCapitalize = "none"
					onChangeText = {this.props.handleInput}
				/>
		  	</View>
		)
	}
}

export default Input

const styles = StyleSheet.create({
	input: {
	  marginTop: 20,
	  width: 300,
	  backgroundColor: '#F2F2F2'
	},
	textInput: {
	  fontSize: 20,
	  width: 300,
	  alignSelf: 'center',
	  textAlign: 'center'
	}
});