import React, { Component} from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';

class Icon extends Component {
    render () {
        return (
            <View>
                <TouchableOpacity onPress={this.props.toggle}>
                    <Image
                        style={styles.icon}
                        source={require('./img/settings-cog.png')}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

export default Icon

const styles = StyleSheet.create({
    icon: {
        width: 36,
        height: 36
    },
});
  
