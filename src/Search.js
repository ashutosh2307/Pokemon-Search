import React from 'react';
import { View, Text } from 'react-native';
import { Header, Item, Icon, Input, Button } from 'native-base'
import Loader from './Loader';
import Body from './Body';
import axios from 'axios';

class Search extends React.Component {
  state = {
    pokeSearch : '',
    onCall : true,
    data : {}
  }
  searchPoke = () => {
    this.setState({onCall : true});
    var self = this;
    axios.get("http://pokeapi.co/api/v2/pokemon/"+this.state.pokeSearch.toLowerCase())
   .then(function(response) {
      console.log(response.data);
      self.setState({data : response.data});
      self.setState({onCall : false});
    }).catch(function(error){
      console.log(error)
    })
  }
  renderBody = () => {
      if(this.state.onCall){
        return(
          <Loader />
        )
      }
      else {
        return(
          <Body data={this.state.data}/>
        )
      }
  }

  render() {
    return (
      <View style = {{flex : 1}}>
        <Header
          searchBar //= {true}
          rounded
          >
            <Item>
              <Icon name='ios-search' onPress={this.searchPoke} />
              <Input
                value = {this.state.pokeSearch}
                placeholder = 'Search Pokemon'
                onChangeText = {(pokeSearch) => this.setState({pokeSearch})}
              />
            </Item>
        </Header>
        {this.renderBody()}
      </View>
    );
  }
}

export default Search;
