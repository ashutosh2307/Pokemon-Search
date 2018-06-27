import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { Button } from 'native-base';

var myBackground = require('../assets/landing.jpg');

class Landing extends React.Component {
  render(){
    return (
      <View>
        <ImageBackground
          source={myBackground}
          style={styles.background}>
          <View style={styles.welcome}>
            <Text
              style={styles.welcomeText}
            >Welcome to PokeSearch</Text>
            <Button
              block = {true}
              style = {styles.ButtonStyle}
              onPress = {() => {
                this.props.switchScreen('Search')
              }}
            >
            <Text style={styles.buttonText}>Search</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

export default Landing;

const styles = {

  background : {
    width: '100%',
    height: '100%'
  },

  welcome : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },

  welcomeText : {
    fontSize : 30,
    color : 'blue',
    alignItems : 'center',
    fontWeight: '700'
  },
  ButtonStyle : {
    margin : 10,
  },

  buttonText : {
    color : 'white'
  }
}
