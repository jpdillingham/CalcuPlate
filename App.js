import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ScrollView, View, Modal, Button, TextInput, Image } from 'react-native';

import PlateDisplay from './components/PlateDisplay'
import Settings from './components/Settings'

export default class App extends React.Component {
  state = {
    isModalVisible: false,
    barWeight: 45,
    desiredWeight: 45,
  }

  handleInput = (input) => { 
    this.setState({ desiredWeight: input })
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.contentContainer}>
          <PlateDisplay weight={this.state.desiredWeight}/>

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
