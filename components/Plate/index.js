import React, { Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';

class Plate extends Component {
    sizes = [ '1.25', '2.5', '5', '10', '25', '35', '45', '55' ]
    widths = [ 50, 100, 150, 200, 250, 300, 350, 400 ]

    noop = () => { }

    getWidth = (weight) => { 
        return this.widths[this.sizes.indexOf(weight)]
    }

    render () {
        return (
            <View style={{width: this.getWidth(this.props.weight.toString()), padding: 1 }}>
                <Button
                    onPress={this.noop}
                    title={this.props.weight.toString()}
                    color="#505050"
                    accessibilityLabel={this.props.weight.toString()}
                />
            </View>
        )
    }
}

export default Plate
