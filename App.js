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
      <ScrollView contentContainerStyle={styles.container}>
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

          <Settings/>
        </View>
      </ScrollView>
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
    top: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentContainer: {
    flex: 1
  },
  input: {
    marginTop: 10,
    width: 400,
    flex: 1,
    flexDirection: 'row'
  },
  textInput: {
    fontSize: 24,
    width: 400,
    alignSelf: 'center',
    textAlign: 'center'
  }
});
