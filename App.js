import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal, Button, TextInput, Image } from 'react-native';

import Title from './components/Title'
import PlateDisplay from './components/PlateDisplay'
import Settings from './components/Settings'

export default class App extends React.Component {
  state = {
    isModalVisible: false,
    bar: 45,
    desiredWeight: 45,
    plates: [
      { key: 1.25, count: 1 },
      { key: 2.5, count: 1 },
      { key: 5, count: 2 },
      { key: 10, count: 2 },
      { key: 25, count: 1 },
      { key: 35, count: 1 },
      { key: 45, count: 1 },
      { key: 55, count: 0 },
    ]
  }

  handleInput = (input) => { 
    this.setState({ desiredWeight: input })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Title/>
          <PlateDisplay 
            bar={this.state.bar}
            plates={this.state.plates} 
            weight={this.state.desiredWeight}
          />

          <View style={styles.input}>
            <TextInput 
              style = {styles.textInput}
              keyboardType = "numeric"
              underlineColorAndroid = "transparent"
              placeholder = 'Enter Desired Weight'
              placeholderTextColor = "#808080"
              autoCapitalize = "none"
              onChangeText = {this.handleInput}
            />
          </View>

        </View>
        <Settings/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    marginTop: 20,
    width: 300,
    backgroundColor: '#F2F2F2'
  },
  textInput: {
    fontSize: 20,
    width: 300,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
