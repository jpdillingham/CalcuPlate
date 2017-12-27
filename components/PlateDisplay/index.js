import React, { Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';

import Plate from '../Plate'

class PlateDisplay extends Component {
    render () {
        return (
            <View style={styles.plates}>
                <Plate weight="1.25"/>
                <Plate weight="2.5"/>
                <Plate weight="5"/>
                <Plate weight="10"/>
                <Plate weight="25"/>
                <Plate weight="35"/>
                <Plate weight="45"/>
                <Plate weight="55"/>
            </View>
        )
    }
}

export default PlateDisplay

const styles = StyleSheet.create({
    plates: {
        alignItems: 'center',
    }
});
  