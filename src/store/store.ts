import { configureStore } from '@reduxjs/toolkit';
import alertReducer from './alertSlice';
import userReducer from './userSlice';
import { useDispatch } from 'react-redux';


export default configureStore({
  reducer: {
    alert: alertReducer,
    user: userReducer
  },
});

export type RootState = ReturnType <typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const UseAppDispatch = () => useDispatch<AppDispatch>();