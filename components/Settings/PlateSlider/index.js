import React, { Component} from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

class PlateSlider extends Component {
    render () {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.caption}>{this.props.weight}</Text>
                    <Text style={styles.value}>{this.props.count}</Text>
                </View>
                <Slider 
                    step={1}
                    minimumValue={0}
                    maximumValue={10}
                    value={this.props.count}
                    onValueChange={(value) => this.props.handleValueChange(this.props.weight, value)}
                />
            </View>
        )
    }
}

export default PlateSlider

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    caption: {
        fontSize: 24,
        flex: 1,
        marginLeft: 10,
    },
    value: {
        fontSize: 24,
        flex: 1,
        textAlign: 'right',
        marginRight: 10,
    }
});
  
