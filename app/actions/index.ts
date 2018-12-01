import axios from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { Login, Logout } from './consts';

export interface IUserPayload {
  email: string;
  password: string;
}

const login = createAsyncAction(
  Login.REQUEST,
  Login.SUCCESS,
  Login.FAILURE,
)<void, IUserPayload, Error>();

const corsProxy = 'https://cors-anywhere.herokuapp.com/';

export const onLogin = (user: IUserPayload) => async (dispatch: Dispatch) => {
  dispatch(login.request());
  const urlLogin = 'http://www.mocky.io/v2/5aafaf6f2d000057006eff31';

  const urlWithProxy = `${corsProxy}${urlLogin}`;
  try {
    const response = await axios.post(urlWithProxy, user);

    dispatch(login.success(response.data));
  } catch (e) {
    dispatch(login.failure(e.message));
  }
};

const logout = createAsyncAction(
  Logout.REQUEST,
  Logout.SUCCESS,
  Logout.FAILURE,
)<void, IUserPayload, Error>();

export const onLogout = () => async (dispatch: Dispatch) => {
  dispatch(logout.request());
  const urlLogout = 'http://www.mocky.io/v2/5aafaf6f2d000057006eff31';

  const urlWithProxy = `${corsProxy}${urlLogout}`;
  try {
    const response = await axios.get(urlWithProxy);

    dispatch(logout.success(response.data));
  } catch (e) {
    dispatch(logout.failure(e.message));
  }
};
