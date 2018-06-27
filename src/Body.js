import React from 'react';
import { ScrollView, Image, Text, View, Dimensions, ImageBackground } from 'react-native';
import { ListItem, List } from 'native-base';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width;
var back = require('../assets/back.jpg');

class Body extends React.Component{
	render(){
		var pokemon = this.props.data;
		if(!pokemon){
			return<View/>
		}
		return(
			<ImageBackground
				style={styles.backgroundImage}
				source={back}
			>
				<ScrollView style={{flex: 1}}>
	      	<Text style={styles.header}>#{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
					<View style={styles.ViewStyle}>
						<Image
							source= {{uri : pokemon.sprites.front_default}}
							style={styles.img}
						/>
					</View>

					<View style={styles.info}>
						<ListItem itemDivider>
							<Text style={{fontWeight : 'bold'}}>Size</Text>
						</ListItem>
						<ListItem>
							<Text>Weight - {pokemon.weight}gm</Text>
						</ListItem>
						<ListItem>
							<Text>Height - {pokemon.height/10}m</Text>
						</ListItem>
						<ListItem itemDivider>
							<Text style={{fontWeight : 'bold'}}>Abilities</Text>
						</ListItem>
						<List
							dataArray={pokemon.abilities}
							renderRow = {(item) =>
								<ListItem>
									<Text>{item.ability.name}</Text>
								</ListItem>
							}
						>
						</List>
					</View>
				</ScrollView>
			</ImageBackground>
		)
	}
}

const styles = {
	backgroundImage : {
		flex : 1,
		// resizeMode : 'center',
		height : height,
		width : width
	},

	header : {
		fontSize : 30,
		// fontWeight : 600,
		color : 'white',
		textAlign : 'center'
	},

	img : {
		height : 200,
		width : 200,
		justifyContent : 'center',
		alignItems : 'center'
	},

	ViewStyle : {
		backgroundColor : 'white',
		// opacity : 0.9
	},

	info : {
		flex : 1,
		backgroundColor : 'white',
		opacity : 0.8
	}
}

export default Body;
