import React, { Component} from 'react';
import { View, Picker } from 'react-native';

class BarPicker extends Component {
    render () {
        return (
            <View>
                <Picker
                    selectedValue={this.props.bar}
                    onValueChange={(value, index) => this.props.handleBarUpdate(value)}
                >
                    {this.props.bars.map(b => 
                        <Picker.Item key={b} label={b.toString()} value={b}/>)
                    }
                </Picker>
            </View>
        )
    }
}

export default BarPicker