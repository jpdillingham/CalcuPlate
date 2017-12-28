import React, { Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Plate from '../Plate'

class PlateDisplay extends Component {
    getPlates = () => {
        let target = JSON.parse(JSON.stringify(this.props.weight));
        let bar = this.props.bar;
        let plates = JSON.parse(JSON.stringify(this.props.plates));
        plates = this.sortDesc(this.removeZeros(plates));
    
        let stack = [];
      
        target -= bar;
        target /= 2;

        while (true) {
            let plate = plates[0];
            
            if (plate.key <= target) {
                stack.push(plate);
                target -= plate.key
            }
            
            plates = this.removePlateFromStack(plates, plate.key);
            
            if (plates.length == 0) {
                break;
            }
        }
    
        return stack;
    }

    removePlateFromStack = (stack, key) => {
        let foundPlate = stack.find(p => p.key == key);
        
        if (foundPlate) {
            let foundIndex = stack.indexOf(foundPlate);
		    stack[foundIndex].count -= 1;
        }

	    return this.removeZeros(stack);
    }

    removeZeros = (arr) => {
        return arr.filter(a => a.count > 0);
    }

    sortDesc = (arr) => {
        return arr.sort((a,b) => {
            if (a.key > b.key) return -1;
            if (a.key < b.key) return 1;
            return 0;
        })
    }

    sortAsc = (arr) => {
        return arr.sort((a,b) => {
            if (a.key > b.key) return 1;
            if (a.key < b.key) return -1;
            return 0;
        })
    }

    noop = () => {}

    getGuid = () => {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    getSum = (stack) => {
        if (stack.length > 0) {
            return stack.map(p => p.key).reduce((t,n) => t + n);
        }
        return 0;
    }

    getRemainder = (stack) => {
        let sum = this.props.bar;
        let remainder = 0;

        if (stack.length > 0) {
            sum += stack.map(p => p.key).reduce((t,n) => t + n) * 2;
        }

        remainder = this.props.weight - sum;

        if (remainder > 0) {
            return 'Actual: ' + sum + ', Remainder: ' + remainder;
        }

        return '';
    }

    render () {
        let plates = this.getPlates();

        return (
            <View style={styles.plates}>
                <Text>{this.getRemainder(plates)}</Text>
                <View style={styles.post}/>

                {this.sortAsc(plates).map(p => <Plate key={this.getGuid()} weight={p.key}/>)}
                
                <View style={styles.collar}>
                    <Text style={styles.collarText}>{this.props.bar.toString()}</Text>
                </View>
                <View style={styles.bar}/>
            </View>
        )
    }
}

export default PlateDisplay

const styles = StyleSheet.create({
    plates: {
        marginTop: 5,
        alignItems: 'center',
    },
    collar: {
        width: 75,
        height: 20,
        backgroundColor: '#808080',
        alignItems: 'center',
        zIndex: 10,
    },
    collarText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    post: {
        width: 25,
        height: 30,
        bottom: -5,
        backgroundColor: '#C0C0C0'
    },
    bar: {
        top: -5,
        width: 25,
        height: 30,
        backgroundColor: '#C0C0C0',
    }
});
  