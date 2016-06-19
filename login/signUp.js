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
  signUp_view: {
    height: 2 * config_info.RADIUS + config_info.BORDERWIDTH,
    width: config_info.SIGNUP_VIEW_WIDTH,
    borderColor: '#fff',
    borderWidth: config_info.BORDERWIDTH,
    borderRadius: config_info.RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Sign_font: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
  },
});

export default class SignUp extends Component {
  _signUp() {
    this.props.navigator.push({
      name: 'login',
    });
  }  
  
  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity
        onPress={this._signUp.bind(this)}
        activeOpacity={.3}>
          <View style={styles.signUp_view}>
            <View style={{flex: .65, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.Sign_font}>SIGN</Text>
            </View>
            <View style={{flex: .35, justifyContent: 'center',}}>
              <Text style={styles.Sign_font}>UP</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>     
    );
  }
}