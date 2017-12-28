import React, { Component} from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';

import Icon from './Icon'
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
                <Icon toggle={this.showModal} />
                <Modal 
                    visible={this.state.isModalVisible} 
                    onRequestClose={this.hideModal} 
                    style={styles.modal}
                    animationType='slide'
                    presentationStyle='fullScreen'
                >
                    <View style={styles.wrapper}>
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
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Settings

const styles = StyleSheet.create({
    footer: {
        width: 400,
        alignItems: 'center',
        bottom: 5
    },
    wrapper: {
        margin: 20
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
});
  
