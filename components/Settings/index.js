import React, { Component} from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, Modal, Button, TextInput, Slider } from 'react-native';

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

    handleValueChange = (value) => {
        this.setState({ value: value})
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
                    <Text style={styles.instructions}>Use the sliders to select the number of <Text style={styles.instructionEmphasis}>pairs</Text> of each plate size.</Text>
                    <View style={styles.titleContainer}>
                        <Text style={styles.caption}>{this.props.plates[0].key}</Text>
                        <Text style={styles.value}>{this.state.value}</Text>
                    </View>
                    <Slider 
                        step={1}
                        minimumValue={0}
                        maximumValue={10}
                        value={this.props.plates[0].count}
                        onValueChange={(value) => this.handleValueChange(this.props.plates[0].key, value)}
                    />
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
  
