import React from 'react';
import { StyleSheet, View } from 'react-native';

import Title from './components/Title'
import PlateDisplay from './components/PlateDisplay'
import Input from './components/Input'
import Settings from './components/Settings'

export default class App extends React.Component {
	state = {
		bar: 45,
		bars: [ 40, 45, 50, 55 ],
		plates: [
            { key: 1.25, count: 1 },
			{ key: 2.5, count: 1 },
			{ key: 5, count: 2 },
			{ key: 10, count: 2 },
			{ key: 25, count: 1 },
			{ key: 35, count: 1 },
			{ key: 45, count: 1 },
			{ key: 55, count: 0 },
		],
        desiredWeight: 45,
	}

	handleInput = (input) => { 
		this.setState({ desiredWeight: input })
    }
    
    handleBarUpdate = (weight) => {
        this.setState({ bar: weight })
    }

    handlePlateUpdate = (key, count) => {
		let newPlates = JSON.parse(JSON.stringify(this.state.plates));

		let foundPlate = newPlates.find(p => p.key == key);
        
        if (foundPlate) {
			let foundIndex = newPlates.indexOf(foundPlate);
			newPlates[foundIndex].count = count;

			this.setState({ plates: newPlates })
		}
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
					<Input handleInput={this.handleInput}/>
				</View>
                <Settings 
                    plates={this.state.plates} 
					handlePlateUpdate={this.handlePlateUpdate} 
					bars={this.state.bars}
                    bar={this.state.bar} 
                    handleBarUpdate={this.handleBarUpdate}
                />
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
	}
});
