import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: "",
  email: "",
  skillLevel: 0,
  isLoggedIn: false,
}

export const playerProfile = createSlice({
    name: 'User',
    initialState: initialState,
    reducers: {
      setUserDetails: (state, action) => {
        const {username, email, skillLevel, isLoggedIn} = action.payload;
        state.username = username;
        state.email = email;
        state.skillLevel = skillLevel;
        state.isLoggedIn = isLoggedIn;
      },
  clearUserDetails: (state) => {
      state.username = "",
      state.email = "",
      state.skillLevel = 0,
      state.isLoggedIn = false
    }
    },
  })

  export const { setUserDetails, clearUserDetails } = playerProfile.actions;
export default playerProfile.reducer;