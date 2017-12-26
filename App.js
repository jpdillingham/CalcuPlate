import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal, Button, TextInput, Image } from 'react-native';

import Plate from './components/Plate'

export default class App extends React.Component {
  state = {
    isModalVisible: false,
    input: '',
    barWeight: 45,
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })
  handleInput = (input) => { 
    this.setState({ input: input })
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contentContainer}>
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

          <View style={styles.input}>
            <TextInput style = {styles.textInput}
                  keyboardType = "numeric"
                  underlineColorAndroid = "transparent"
                  placeholder = {this.state.barWeight.toString()}
                  placeholderTextColor = "#9a73ef"
                  autoCapitalize = "none"
                  onChangeText = {this.handleInput}
            />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity onPress={this._showModal}>
              <Image
                style={styles.icon}
                source={require('./settings-cog.png')}
              />
            </TouchableOpacity>
          </View>
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
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    top: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  contentContainer: {
    flex: 1
  },
  plates: {
    alignItems: 'center'
  },
  input: {
    width: 400,
    flex: 1,
    flexDirection: 'row'
  },
  textInput: {
    fontSize: 24,
    width: 500,
    alignSelf: 'center'
  },
  icon: {
    width: 36,
    height: 36
  },
  footer: {
    position: 'absolute',
    width: 400,
    bottom: 48,
    alignItems: 'center'
  },
  modal: {
    backgroundColor: '#808080',
    margin: 15, 
    alignItems: 'center',
    justifyContent: 'center',
  }
});
