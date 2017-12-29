import React, { Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';

class Plate extends Component {
    sizes = [ '1.25', '2.5', '5', '10', '25', '35', '45', '55' ]
    widths = [ 50, 100, 150, 200, 250, 300, 350, 400 ]

    getWidth = (weight) => { 
        return this.widths[this.sizes.indexOf(weight)]
    }

    render () {
        return (
            <View style={this.style.view}>
                <Text style={this.style.text}>{this.props.weight.toString()}</Text>
            </View>
        )
    }

    style = {
        view: {
            width: this.getWidth(this.props.weight.toString()),
            padding: 2,
            marginBottom: 1,
            backgroundColor: '#505050',
            alignItems: 'center',
        },
        text: {
            color: '#FFFFFF',
            fontWeight: 'bold',
        }

    }
}

export default Plate
