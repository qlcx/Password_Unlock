/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Navigation from './login/navigation';

class Password_Unlock extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

AppRegistry.registerComponent('Password_Unlock', () => Password_Unlock);
