import React from 'react';
import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');
export const BORDERWIDTH = 2;
export const RADIUS = width / 12;
export const CONFIRM_SECTION = 1.5 * RADIUS;
export const CONFIRM_ICON_RADIUS = RADIUS / 2; 

export const TEXT_INPUT_INIT_WIDTH = width / 7 + 0.5 * RADIUS;
export const SIGNUP_VIEW_WIDTH = width / 2.2;

export const BACKGROUNDCOLOR = '#1f1f1f';