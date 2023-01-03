import { createSlice } from '@reduxjs/toolkit';
import dayjs from "dayjs";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    
  },
  reducers: {
    addUser: (state, action) => {
      state = { ...action.payload };
    },
  }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer