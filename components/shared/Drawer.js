import React, { Component } from 'react';
import { View, Text} from 'react-native'

export default class App extends Component {

  render() {
    return (
      <View style = { {paddingTop: 20}}>
        <ImageBackground source={require('../../assets/background.jpg')} style = {styles.titleBackground}>
          <Text>Menu</Text>
      </View>
    );
  }
}

export default Drawer;
