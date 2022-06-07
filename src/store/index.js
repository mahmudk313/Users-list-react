import { configureStore } from '@reduxjs/toolkit';

//import Slices
import usersReducer from './Slices/UsersSlice';

export const store = configureStore({
  reducer: {
      users: usersReducer
  },
})