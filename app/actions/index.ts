import axios from 'axios';
import { Dispatch } from 'redux';
import { createAction, createAsyncAction } from 'typesafe-actions';
import { Login, LOGOUT } from './consts';

export interface IUserPayload {
  email: string;
  password: string;
}
export const logout = createAction(LOGOUT);

const login = createAsyncAction(
  Login.REQUEST,
  Login.SUCCESS,
  Login.FAILURE,
)<void, IUserPayload, Error>();

export const onLogin = (user: IUserPayload) => async (dispatch: Dispatch) => {
  dispatch(login.request());
  const corsProxy = 'https://cors-anywhere.herokuapp.com/';
  const urlLogin = 'http://www.mocky.io/v2/5aafaf6f2d000057006eff31';

  const urlWithProxy = `${corsProxy}${urlLogin}`;
  try {
    const response = await axios.post(urlWithProxy, user);

    dispatch(login.success(response.data));
  } catch (e) {
    dispatch(login.failure(e.message));
  }
};
