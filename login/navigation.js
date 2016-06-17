import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Navigator,
} from 'react-native';
import * as config_info from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config_info.BACKGROUNDCOLOR,
  },
});

export default class Navigation extends Component {
  render() {
    return (
      <View />     
    );
  }
}