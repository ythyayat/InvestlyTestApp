import React from 'react';
import {Image} from 'react-native';
import {iconProps, icons} from '../assets/icon';

interface props extends iconProps {
  size?: number;
}

const Icon = ({name, size = 20}: props) => {
  return <Image source={icons[name]} style={{width: size, height: size}} />;
};

export default Icon;
