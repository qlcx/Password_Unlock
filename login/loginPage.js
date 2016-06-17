import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as config_info from '../config';

const EMAIL_ICON = <Icon name='email' color='#fff' size={24} />
const CONFIRM_ICON = <Icon name='chevron-right' color='#fff' size={24} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: config_info.BACKGROUNDCOLOR,
  },
  
  login_view: {
    height: 2 * config_info.RADIUS + config_info.BORDERWIDTH,
    width: config_info.width / 3 * 2,
    borderColor: '#fff',
    borderWidth: config_info.BORDERWIDTH,
    borderRadius: config_info.RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_section: {
    height: 2 * config_info.RADIUS,
    width:  2 * config_info.RADIUS,
    borderRadius: config_info.RADIUS,
    borderWidth: config_info.BORDERWIDTH,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_section: {
    width: config_info.width / 3 * 2 - 4*config_info.RADIUS - 2*config_info.BORDERWIDTH,
    height: 2 * config_info.RADIUS,
  },
  confirm_section: {
    height: 2 * config_info.RADIUS,
    width: 2 * config_info.RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirm_icon_style: {
    height: 2 * config_info.CONFIRM_ICON_RADIUS,
    width: 2 * config_info.CONFIRM_ICON_RADIUS,
    backgroundColor: '#2a2a2a',     
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: config_info.CONFIRM_ICON_RADIUS,
  },
});

export default class LoginPage extends Component {
    
  _confirm() {
      console.log('confirm');
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.login_view}>
          <View style={styles.icon_section}>
            {EMAIL_ICON}
          </View>
          <View style={styles.input_section}>
          </View>
          <View style={styles.confirm_section}>
            <TouchableOpacity 
              onPress={this._confirm}
              activeOpacity={.3} >
              <View style={styles.confirm_icon_style}>
                {CONFIRM_ICON}
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}