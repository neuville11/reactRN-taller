import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ImageBackground } from 'react-native'
import Api from '../utils/api';

export default class App extends Component {

  state = {
    username: '',
    password: ''
  }
  login = () => {
    Api.post('/user_token',{
      auth: {
        email: this.state.username,
        password: this.state.password
      }
    })
  }

  render() {
    return (
      <View style = { styles.loginWrapper }>
        <ImageBackground source={require('../../assets/background.jpg')} style = {styles.titleBackground}>
          <Text style={styles.pageTitle}>InstaApp</Text>
        </ImageBackground>
        <View style = { styles.inputsWrapper }>
          <TextInput style = {styles.textInput} placeholder='User'/>
          <TextInput style = {styles.textInput} secureTextEntry= {true} placeholder='Password'/>
          <Button title='Login' onPress={ () => this.login() } />
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginWrapper: {
    paddingTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
    flex: 1
  },
  textTitle: {
    color: 'purple'
  },
  textInput: {
    backgroundColor: '#F7F7F7',
    padding: 10,
    marginTop: 15
  },
  inputsWrapper: {
    width: '100%',
    padding: 3
  },
  textLabel: {
    marginTop: 5
  },
  titleBackground: {
    width: '100%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pageTitle: {
    fontSize: 30,
    color: 'white'
  }
})
