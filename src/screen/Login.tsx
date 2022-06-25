import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LoginButton, Header, Input} from '../component';
import Colors from '../common/colors';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header title="Masuk" />
        <Input label="Email" placeholder="Misal: nama@mail.com" type="email" />
        <Input
          label="Password"
          placeholder="Masukan password"
          type="password"
        />
      </View>
      <View>
        <LoginButton />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
});
