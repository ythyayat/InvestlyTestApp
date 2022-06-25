/* eslint-disable react-native/no-inline-styles */
import {Text as NativeText, TextProps} from 'react-native';
import React from 'react';
import Colors, {colorProps} from '../common/colors';

interface TextPropsCustome extends TextProps, colorProps {}

const Text = ({color = 'black', style, ...rest}: TextPropsCustome) => {
  return (
    <NativeText
      style={[{color: Colors[color], fontFamily: 'Inter-Regular'}, style]}
      {...rest}
    />
  );
};

export default Text;
