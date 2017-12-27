import React, { Component} from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';

class Settings extends Component {
    state = {
        isModalVisible: false
    }
    
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })

    render () {
        return (
            <View>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={this._showModal}>
                        <Image
                            style={styles.icon}
                            source={require('./img/settings-cog.png')}
                        />
                    </TouchableOpacity>
                </View>
                <Modal 
                  visible={this.state.isModalVisible} 
                  onRequestClose={this._hideModal} 
                  style={styles.modal}
                  animationType='slide'
                >
                  <View style={styles.modal}>
                    <Text>Hello</Text>
                    <Button
                      onPress={this._hideModal}
                      title="Close Modal"
                      color="#841584"
                      accessibilityLabel="Learn more about this purple button"
                    />
                  </View>
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
        marginTop: 20
    },
    modal: {
        backgroundColor: '#808080',
        margin: 15, 
        alignItems: 'center',
        justifyContent: 'center',
    }
});
  
