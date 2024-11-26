// authSlice.js
import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      const token = action.payload;
      const userJwtDecode = jwtDecode(token);
      // state in auth
      state.user = userJwtDecode; // state.auth.user 로 호출
      state.isAuthenticated = true;
    },
    clearToken: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      Cookies.remove('token');
    },
    getUerInfo: (state, action) => {},
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
