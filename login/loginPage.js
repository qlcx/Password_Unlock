import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');

export default class LoginPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login_view}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  
  login_view: {
    height: height / 10,
    width: width / 3 * 2,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: width / 6,
    
  },
});