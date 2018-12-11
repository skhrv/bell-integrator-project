import axios from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { IUser } from '../models';
import { Login, Logout } from './consts';

const login = createAsyncAction(
  Login.REQUEST,
  Login.SUCCESS,
  Login.FAILURE,
)<void, IUser, Error>();

export const onLogin = (user: IUser) => async (dispatch: Dispatch) => {
  dispatch(login.request());
  const urlLogin = 'http://www.mocky.io/v2/5aafaf6f2d000057006eff31';
  try {
    const response = await axios.post(urlLogin, user);
    dispatch(login.success(response.data));
  } catch (e) {
    dispatch(login.failure(e.message));
  }
};

const logout = createAsyncAction(
  Logout.REQUEST,
  Logout.SUCCESS,
  Logout.FAILURE,
)<void, IUser, Error>();

export const onLogout = () => async (dispatch: Dispatch) => {
  dispatch(logout.request());
  const urlLogout = 'http://www.mocky.io/v2/5aafaf6f2d000057006eff31';
  try {
    const response = await axios.post(urlLogout);
    dispatch(logout.success(response.data));
  } catch (e) {
    dispatch(logout.failure(e.message));
  }
};
