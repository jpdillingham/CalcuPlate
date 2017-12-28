import React, { Component} from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, Modal, Button, TextInput, Slider } from 'react-native';

import PlateSlider from './PlateSlider'

class Settings extends Component {
    state = {
        isModalVisible: false,
        value: this.props.plates[0].count
    }
    
    showModal = () => { 
        this.setState({ isModalVisible: true })
    }

    hideModal = () => { 
        this.setState({ isModalVisible: false })
    }

    render () {
        return (
            <View style={styles.footer}>
                <View>
                    <TouchableOpacity onPress={this.showModal}>
                        <Image
                            style={styles.icon}
                            source={require('./img/settings-cog.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Modal 
                    visible={this.state.isModalVisible} 
                    onRequestClose={this.hideModal} 
                    style={styles.modal}
                    animationType='slide'
                >
                    {this.props.plates.map(p => 
                        <PlateSlider 
                            key={p.key} 
                            weight={p.key} 
                            count={p.count} 
                            handleValueChange={this.props.handlePlateUpdate}
                        />
                    )}
                </Modal>
            </View>
        )
    }
}

export default Settings

const styles = StyleSheet.create({
    icon: {
        width: 36,
        height: 36
    },
    footer: {
        width: 400,
        alignItems: 'center',
        bottom: 5
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        marginTop: 20,
    },
    instructions: {
        fontSize: 18
    },
    instructionEmphasis: {
        fontStyle: 'italic'
    },
      titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 400,
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
        marginLeft: 10,
      }
});
  
