import {StyleSheet, View} from 'react-native';
import React from 'react';
import Text from './Text';

const Header = ({title}: {title?: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter-Bold',
  },
});
