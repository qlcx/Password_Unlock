/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import SignUp from './login/signUp';

class Password_Unlock extends Component {
  render() {
    return (
      <SignUp />
    );
  }
}

AppRegistry.registerComponent('Password_Unlock', () => Password_Unlock);
