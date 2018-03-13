import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import ExternalStack from './routes/ExternalStack';

export default class App extends Component {
  
  state = {
    isLogged: null
  }   

  componentDidMount() {
   
  }

  render() {
    if(this.state.isLogged) {
      return <View />
    }
    else {
      return <ExternalStack />
    }
  }
}

const styles = StyleSheet.create({
  spinner: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
})

