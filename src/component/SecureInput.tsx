import {StyleSheet, View} from 'react-native';
import React from 'react';
import Colors from '../common/colors';

const SecureInput = ({value, isValid}: {value: string; isValid: boolean}) => {
  return (
    <View
      style={[
        styles.secureContainer,
        value.length > 0 && isValid && styles.isTrue,
        value.length > 0 && !isValid && styles.isWrong,
      ]}>
      <View style={styles.circleWrapper}>
        {value?.split('').map((_, index) => (
          <View style={styles.circle} key={'' + index} />
        ))}
      </View>
      <View style={styles.rightSide} />
    </View>
  );
};

export default SecureInput;

const styles = StyleSheet.create({
  secureContainer: {
    backgroundColor: Colors.grayBackground,
    borderColor: Colors.grayLight,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderRadius: 32,
    paddingHorizontal: 16,
    overflow: 'hidden',
  },
  isWrong: {
    backgroundColor: Colors.redBackground,
    borderColor: Colors.red,
  },
  isTrue: {
    backgroundColor: Colors.greenBackground,
    borderColor: Colors.green,
  },
  circleWrapper: {
    overflow: 'hidden',
    flexDirection: 'row',
    flex: 1,
  },
  circle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: Colors.black,
    marginRight: 8,
  },
  rightSide: {
    width: 32,
    backgroundColor: Colors.red,
  },
});
