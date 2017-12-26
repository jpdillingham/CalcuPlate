import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Button, TextInput } from 'react-native';

import Plate from './Plate'

export default class App extends React.Component {
  state = {
    isModalVisible: false,
    input: ''
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })
  handleInput = (input) => { 
    this.setState({ input: input })
  }

  render () {
    return (
      <View style={styles.container}>
        <Plate weight="1.25"/>
        <Plate weight="2.5"/>
        <Plate weight="5"/>
        <Plate weight="10"/>
        <Plate weight="25"/>
        <Plate weight="35"/>
        <Plate weight="45"/>
        <Plate weight="55"/>

        <TextInput style = {styles.input}
               keyboardType = "numeric"
               underlineColorAndroid = "transparent"
               placeholder = "Desired Weight"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleInput}/>
        <TouchableOpacity onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
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

const styles = StyleSheet.create({
  container: {
    top: 40,
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  input: {
    width: 300,
  },
  modal: {
    backgroundColor: '#808080',
    margin: 15, 
    alignItems: 'center',
    justifyContent: 'center',
  }
});
