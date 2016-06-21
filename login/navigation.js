'use strict'
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Navigator,
} from 'react-native';
import SignUp from './signUp';
import LoginPage from './loginPage';
import PasswordPage from './passwordPage';

import * as config_info from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class Navigation extends Component {
  
  _renderScene(route, navigationOperations, onComponentRef) {
    if(route.name === 'signUp') {
      return <SignUp navigator={navigationOperations} />
    } else if(route.name === 'login') {
      return <LoginPage navigator={navigationOperations} />
    } else if(route.name === 'passwordPage') {
        return <PasswordPage navigator={navigationOperations} />
    }
  }  
  
  render() {
    return (
      <Navigator
        style={styles.container} 
        initialRoute={{name: 'signUp'}} 
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this._renderScene} />     
    );
  }
}