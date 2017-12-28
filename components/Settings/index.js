import React, { Component} from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View, Modal } from 'react-native';

import BarPicker from './BarPicker'
import PlateSlider from './PlateSlider'

class Settings extends Component {
    state = {
        isModalVisible: false
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
                    <Text style={styles.heading}>Bar Weight</Text>
                    <BarPicker 
                        bars={this.props.bars} 
                        bar={this.props.bar}
                        handleBarUpdate={this.props.handleBarUpdate}
                    />

                    <Text style={styles.heading}>Plate Counts</Text>
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
    heading: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold'
    },
    closeButton: {
        marginTop: 20,
    },
});
  
