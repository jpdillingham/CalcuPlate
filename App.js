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
        <Title/>
        <View style={styles.contentContainer}>
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
              placeholder = {this.state.desiredWeight.toString()}
              placeholderTextColor = "#9a73ef"
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
  title: {
    fontWeight: 'bold', 
    fontSize: 36
  },
  titleAccent: {
    fontStyle: 'italic'
  },
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  contentContainer: {
  },
  input: {
    marginTop: 10,
    width: 400,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#F2F2F2'
  },
  textInput: {
    fontSize: 24,
    width: 400,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
