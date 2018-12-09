import axios from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { Login, Logout } from './consts';
import { IUser } from './models';

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

/*
const companiesFetch = createAsyncAction(
  CompaniesFetch.REQUEST,
  CompaniesFetch.SUCCESS,
  CompaniesFetch.FAILURE,
)<void, ICompany, Error>();

export const onCompaniesFetch = () => async (dispatch: Dispatch) => {
  dispatch(companiesFetch.request());
  try {
    const response = await axios.get(routes.companiesUrl());
    dispatch(companiesFetch.success(response.data));
  } catch (e) {
    dispatch(companiesFetch.failure(e.message));
  }
};

const addCompany = createAsyncAction(
  AddCompany.REQUEST,
  AddCompany.SUCCESS,
  AddCompany.FAILURE,
)<void, ICompany, Error>();

export const onAddCompany = (company: ICompany) => async (dispatch: Dispatch) => {
  dispatch(addCompany.request());
  try {
    const response = await axios.post(routes.companiesUrl(), company);
    dispatch(addCompany.success(response.data));
  } catch (e) {
    dispatch(addCompany.failure(e.message));
  }
};

const removeCompany = createAsyncAction(
  RemoveCompany.REQUEST,
  RemoveCompany.SUCCESS,
  RemoveCompany.FAILURE,
)<void, ICompany, Error>();

export const onRemoveCompany = (id: string) => async (dispatch: Dispatch) => {
  dispatch(removeCompany.request());
  try {
    const response = await axios.delete(routes.companyUrl(id));
    dispatch(removeCompany.success(response.data));
  } catch (e) {
    dispatch(removeCompany.failure(e.message));
  }
};
*/
