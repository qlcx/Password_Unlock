/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import LoginPage from './login/loginPage';

class Password_Unlock extends Component {
  render() {
    return (
      <LoginPage />
    );
  }
}

AppRegistry.registerComponent('Password_Unlock', () => Password_Unlock);
