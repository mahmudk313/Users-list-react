import { configureStore } from '@reduxjs/toolkit';

//import Slices
import usersReducer from './slices/UsersSlice';

export const store = configureStore({
  reducer: {
      users: usersReducer
  },
})