import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
    users: [
      { username: 'user1', password: 'password1',},
      { username: 'user2', password: 'password2',},
      { username: 'user3', password: 'password3',},
      { username: 'user4', password: 'password4',},
    ],
    currentUser: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = state.users.find(user => user.username === username && user.password === password);
      if (user) {
        return {
          ...state,
          isAuthenticated: true,
          currentUser: user,
        }
      } 
    },
    logout: (state) => {
      return {
        ...state,
        isAuthenticated: false,
        currentUser: null
      }
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
