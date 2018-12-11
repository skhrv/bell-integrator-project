import axios from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { ISubDivision } from '../models';
import { AddSubDivision, EditSubDivision, RemoveSubDivision, SubDivisionsFetch } from './consts';
import routes from './routes';

const subDivisionsFetch = createAsyncAction(
  SubDivisionsFetch.REQUEST,
  SubDivisionsFetch.SUCCESS,
  SubDivisionsFetch.FAILURE,
)<void, ISubDivision, Error>();

export const onSubDivisionsFetch = () => async (dispatch: Dispatch) => {
  dispatch(subDivisionsFetch.request());
  try {
    const response = await axios.get(routes.subDivisionsUrl());
    dispatch(subDivisionsFetch.success(response.data));
  } catch (e) {
    dispatch(subDivisionsFetch.failure(e.message));
  }
};

const addSubDivision = createAsyncAction(
  AddSubDivision.REQUEST,
  AddSubDivision.SUCCESS,
  AddSubDivision.FAILURE,
)<void, ISubDivision, Error>();

export const onAddSubDivision = (subDivision: ISubDivision) => async (dispatch: Dispatch) => {
  dispatch(addSubDivision.request());
  try {
    const response = await axios.post(routes.subDivisionsUrl(), subDivision);
    dispatch(addSubDivision.success(response.data));
  } catch (e) {
    dispatch(addSubDivision.failure(e.message));
  }
};

const removeSubDivision = createAsyncAction(
  RemoveSubDivision.REQUEST,
  RemoveSubDivision.SUCCESS,
  RemoveSubDivision.FAILURE,
)<void, string, Error>();

export const onRemoveSubDivision = (id: string) => async (dispatch: Dispatch) => {
  dispatch(removeSubDivision.request());
  try {
    await axios.delete(routes.subDivisionUrl(id));
    dispatch(removeSubDivision.success(id));
  } catch (e) {
    dispatch(removeSubDivision.failure(e.message));
  }
};

const editSubDivision = createAsyncAction(
  EditSubDivision.REQUEST,
  EditSubDivision.SUCCESS,
  EditSubDivision.FAILURE,
)<void, ISubDivision, Error>();

export const onEditSubDivision = (subDivision: ISubDivision) => async (dispatch: Dispatch) => {
  dispatch(editSubDivision.request());
  try {
    const response = await axios.put(routes.subDivisionUrl(subDivision.id), subDivision);
    dispatch(editSubDivision.success(response.data));
  } catch (e) {
    dispatch(editSubDivision.failure(e.message));
  }
};
