import React, { Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';

class Title extends Component {
    render () {
        return (
            <View>
                <Text style={styles.title}>
                    Calcu
                    <Text style={styles.titleAccent}>Plate</Text>
                </Text>
                <Text>Enter the desired weight.</Text>
            </View>
        )
    }
}

export default Title

const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold', 
      fontSize: 36
    },
    titleAccent: {
      fontStyle: 'italic'
    }
});