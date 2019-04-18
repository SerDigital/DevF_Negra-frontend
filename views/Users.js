
import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View} from 'react-native';
import { ListItem, Input } from 'react-native-elements'
const axios = require('axios');

type Props = {};
export default class Users extends Component<Props> {

  state = {
    users: [],
    searchResults: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/getallusers').then(res => {
      // console.log(res.data);
      this.setState({
        users: res.data,
        searchResults: res.data
      })
    }).catch(error => {
      console.log('el error:', error)
    })
  }

  handleSearch = text => {
    
    const results = this.state.searchResults.filter(element => {
      return element.app_id.indexOf(text) > -1
    })
    this.setState({
      ...this.state,
      searchResults: results
    })
  }

  render() {
    return (
      <View>
        <Input
          placeholder='Search'
          leftIcon={{ name: 'search'}}
          onChangeText={this.handleSearch}
        />

        
        <ScrollView style={styles.container}>
        <Text> Registros totales: {this.state.users.length}</Text>
          {this.state.searchResults.map((element, index) => (
          <ListItem 
          key={index}
          title={element.app_id} 
          subtitle={element.uuid}        
          onPress={() => this.props.navigation.navigate('Metric', element)}
          />
          ))}
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    marginTop: '5%',    
  },
  text: {
      color: 'blue'
  }
});