import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const {height, width} = Dimensions.get('window');
const BORDERWIDTH = 2;
const RADIUS = width / 12;
const CONFIRM_ICON_RADIUS = RADIUS / 2;  

const EMAIL_ICON = <Icon name='email' color='#fff' size={24} />
const CONFIRM_ICON = <Icon name='chevron-right' color='#fff' size={24} />

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
  },
  
  login_view: {
    height: 2 * RADIUS + BORDERWIDTH,
    width: width / 3 * 2,
    borderColor: '#fff',
    borderWidth: BORDERWIDTH,
    borderRadius: RADIUS,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_section: {
    height: 2 * RADIUS,
    width:  2 * RADIUS,
    borderRadius: RADIUS,
    borderWidth: BORDERWIDTH,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input_section: {
    width: width / 3 * 2 - 4*RADIUS - 2*BORDERWIDTH,
    height: 2 * RADIUS,
  },
  confirm_section: {
    height: 2 * RADIUS,
    width: 2 * RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirm_icon_style: {
    height: 2 * CONFIRM_ICON_RADIUS,
    width: 2 * CONFIRM_ICON_RADIUS,
    backgroundColor: '#2a2a2a',     
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CONFIRM_ICON_RADIUS,
  },
});