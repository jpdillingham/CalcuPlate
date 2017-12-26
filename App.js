import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({ isModalVisible: true })

  _hideModal = () => this.setState({ isModalVisible: false })

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._showModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>
        <Modal 
          visible={this.state.isModalVisible} 
          onRequestClose={this._hideModal} 
          style={styles.modal}
          transparent={true}
          animationType='slide'
        >
          <View style={styles.modal}>
            <Text>Hello</Text>
            <Button
              onPress={this._hideModal}
              title="Learn More"
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
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    backgroundColor: '#808080',
    margin: 15, 
    alignItems: 'center',
    justifyContent: 'center',
  }
});
