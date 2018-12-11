import axios from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { ICompany } from '../models';
import { AddCompany, CompaniesFetch, EditCompany, RemoveCompany } from './consts';
import routes from './routes';

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
)<void, string, Error>();

export const onRemoveCompany = (id: string) => async (dispatch: Dispatch) => {
  dispatch(removeCompany.request());
  try {
    await axios.delete(routes.companyUrl(id));
    dispatch(removeCompany.success(id));
  } catch (e) {
    dispatch(removeCompany.failure(e.message));
  }
};

const editCompany = createAsyncAction(
  EditCompany.REQUEST,
  EditCompany.SUCCESS,
  EditCompany.FAILURE,
)<void, ICompany, Error>();

export const onEditCompany = (company: ICompany) => async (dispatch: Dispatch) => {
  dispatch(editCompany.request());
  try {
    const response = await axios.put(routes.companyUrl(company.id), company);
    dispatch(editCompany.success(response.data));
  } catch (e) {
    dispatch(editCompany.failure(e.message));
  }
};
