import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Text from './Text';
import Colors from '../common/colors';
import Icon from './Icon';
import SecureInput from './SecureInput';
import {useAppDispatch} from '../hooks';
import {
  setEmail,
  setPassword,
  setValidationEmail,
  setValidationPassword,
} from '../redux/reducer/loginSlice';

interface inputProps {
  label: string;
  placeholder: string;
  secure?: boolean;
  type?: 'password' | 'email';
}

const Input = ({label, placeholder, type}: inputProps) => {
  const [value, setValue] = useState('');
  const [isShow, setIsShow] = useState(true);
  const [isValidated, setIsValidated] = useState(true);

  const dispatch = useAppDispatch();

  const hints =
    type === 'password'
      ? 'Minimal 8 karakter'
      : type === 'email'
      ? 'Format email tidak sesuai'
      : '';

  useEffect(() => {
    if (type) {
      let result = true;
      if (type === 'password') {
        result = value.length > 7;
        dispatch(setValidationPassword(result));
        dispatch(setPassword(value));
      } else if (type === 'email') {
        result = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value);
        dispatch(setValidationEmail(result));
        dispatch(setEmail(value));
      }
      setIsValidated(result);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={val => setValue(val)}
          placeholderTextColor={Colors.grayDark}
          style={[
            styles.input,
            isShow && value.length > 0 && type === 'password' && styles.hidden,
            type && value.length > 0 && isValidated && styles.isTrue,
            type && value.length > 0 && !isValidated && styles.isWrong,
          ]}
          keyboardType={
            type === 'password' ? 'visible-password' : 'email-address'
          }
        />
        {type === 'password' && (
          <>
            <SecureInput value={value} isValid={isValidated} />
            <View style={styles.eye}>
              <TouchableOpacity onPress={() => setIsShow(!isShow)}>
                {isShow ? <Icon name="eyeClose" /> : <Icon name="eyeOpen" />}
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
      {type && value.length > 0 && !isValidated && styles.isWrong && (
        <Text style={styles.hint}>{hints}</Text>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 20,
  },
  isWrong: {
    backgroundColor: Colors.redBackground,
    borderColor: Colors.red,
  },
  isTrue: {
    backgroundColor: Colors.greenBackground,
    borderColor: Colors.green,
  },
  label: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Inter-Bold',
  },
  input: {
    backgroundColor: Colors.grayBackground,
    borderColor: Colors.grayLight,
    borderWidth: 1,
    borderRadius: 32,
    paddingHorizontal: 16,
    height: 48,
    paddingTop: 8,
    color: Colors.black,
    fontFamily: 'Inter-Regular',
    zIndex: 2,
  },
  hidden: {
    opacity: 0,
  },
  eye: {
    position: 'absolute',
    zIndex: 3,
    right: 18,
    top: 14,
  },
  hint: {
    color: Colors.red,
    fontSize: 12,
    marginTop: 8,
  },
});
