import React, { Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';

class Title extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Calcu
                    <Text style={styles.titleAccent}>Plate</Text>
                </Text>
            </View>
        )
    }
}

export default Title

const styles = StyleSheet.create({
    container: {
      top: 40,
      alignItems: 'center',
      height: 100
    },
    title: {
      fontWeight: 'bold', 
      fontSize: 36
    },
    titleAccent: {
      fontStyle: 'italic'
    }
});