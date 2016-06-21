'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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

export default class PasswordPage extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={{color: '#fff'}}>薛林健</Text>
      </View>
    );
  }
}