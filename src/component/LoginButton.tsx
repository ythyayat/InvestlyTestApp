import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Text from './Text';
import Colors from '../common/colors';
import {useAppDispatch, useAppSelector} from '../hooks';
import {loginFetch} from '../redux/reducer/loginSlice';

const LoginButton = () => {
  const {validation, email, password} = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={!(validation.email && validation.password)}
        onPress={() => {
          dispatch(loginFetch({email, password}));
        }}>
        <View
          style={[
            styles.button,
            validation.email && validation.password && styles.isActive,
          ]}>
          <Text style={styles.title}>Masuk</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,
  },
  button: {
    backgroundColor: Colors.gray,
    height: 42,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.white,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  isActive: {
    backgroundColor: Colors.purple,
  },
});
