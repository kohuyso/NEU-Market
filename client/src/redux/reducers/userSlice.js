import { createSlice } from '@reduxjs/toolkit';
import Storage from '../../tools/Storage';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: Storage.getData('user') ?? null
  },
  reducers: {
    addUser: (state, action) => {
      Storage.setData('user', action.payload);
      state = { ...action.payload };
    },
    removeUser: (state) => {
      Storage.removeData('user');
      state.user = null;
    },
    addAddress: (state, action) => {
      const user = Storage.getData('user');
      user.address.push(action.payload);
      Storage.setData('user', user);
      state = { ...user };
    }
  }
})

export const { addUser, removeUser, addAddress } = userSlice.actions

export default userSlice.reducer