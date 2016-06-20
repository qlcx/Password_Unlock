import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  Easing,
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
    height: 2 * config_info.RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirm_section: {
    height: config_info.CONFIRM_SECTION,
    width: config_info.CONFIRM_SECTION,
    //alignItems: 'center',
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
  
  Text_Input: {
    color: '#fff',
    fontSize: 19,
    height: 1.5 * config_info.RADIUS,
  }
});

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text_length: 0,
      text_data: '',
      
      animate_email: new Animated.Value(0),
    };
    
    this._confirm = this._confirm.bind(this);
  }
  
  componentDidMount() {
    Animated.sequence([
      Animated.timing(
        this.state.animate_email,
        {
          toValue: 1,
          duration: 500, //持续时间
          easing: Easing.easeOutBounce,
        },
      ),
      Animated.timing(
        this.state.animate_email,
        {
          toValue: 0,
          duration: 500, //持续时间
          easing: Easing.easeOutBounce,
        },
      ),
    ])
    .start();
  }
  
  componentWillUnmount() {
    this.setState({
      text_length: 0,
      text_data: '',
    });
  }
    
  _confirm(text) {
    console.log(text);
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.login_view, {width: 2 * config_info.RADIUS +
          config_info.CONFIRM_SECTION + config_info.TEXT_INPUT_INIT_WIDTH + 
          config_info.BORDERWIDTH + this.state.text_length,}]}>
          <Animated.View style={[styles.icon_section, 
            {transform: 
              [{rotateZ: this.state.animate_email.interpolate({
                inputRange: [0, 1],
                outputRange: ['340deg', '360deg']})
              }]}
          ]}>
            {EMAIL_ICON}
          </Animated.View>
          <View style={[styles.input_section, 
            {width: config_info.TEXT_INPUT_INIT_WIDTH + this.state.text_length,}]}>
            <TextInput
              style={styles.Text_Input}
              autoFocus={true}
              placeholder='e-mail'
              placeholderTextColor='#fff'
              underlineColorAndroid='transparent' 
              selectTextOnFocus={true}
              maxLength={45}
              onChangeText={(text) => {this.setState({text_length: text.length * 3, text_data: text,})}} />
          </View>
          <View style={styles.confirm_section}>
            <TouchableOpacity 
              onPress={() => {this._confirm(this.state.text_data)}}
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