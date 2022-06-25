import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';

type validationTpe = {
  email: boolean;
  password: boolean;
};

export interface loginState {
  isLogin: boolean;
  validation: validationTpe;
  email: string;
  password: string;
  token: string;
}

const initialState: loginState = {
  isLogin: false,
  validation: {
    email: false,
    password: false,
  },
  email: '',
  password: '',
  token: '',
};

export const loginFetch = createAsyncThunk(
  'login/loginFetch',
  // if you type your function argument here
  async ({email, password}: {email: string; password: string}) => {
    const response = await fetch('https://stg-api.investly.id/v2/auth/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({email, password}),
    });

    return await response.json();
  },
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setValidationEmail: (state, action: PayloadAction<boolean>) => {
      state.validation.email = action.payload;
    },
    setValidationPassword: (state, action: PayloadAction<boolean>) => {
      state.validation.password = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(loginFetch.fulfilled, (state, {payload}) => {
      if (payload?.status) {
        state.token = payload?.data?.access_token;
      } else {
        ToastAndroid.show('Gagal login', ToastAndroid.SHORT);
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const {
  // login,
  setValidationEmail,
  setValidationPassword,
  setEmail,
  setPassword,
} = loginSlice.actions;

export default loginSlice.reducer;
