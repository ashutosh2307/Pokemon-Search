import React from 'react';
import { Text, View, Platform, ImageBackground } from 'react-native';
import { Button } from 'native-base';
import Landing from './src/Landing';
import Search from './src/Search';

export default class App extends React.Component {

  state = {
    currentScreen : 'Landing'
  }
  switchScreen = (currentScreen) => {
      this.setState({currentScreen});
  }
  renderScreen = () => {
    if(this.state.currentScreen === 'Landing'){
      return(
        <Landing switchScreen = {this.switchScreen}/>
      )
    }
    else if(this.state.currentScreen === 'Search') {
      return(
        <Search />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop : Platform.OS === "android" ? 24 : 0
  }
}
