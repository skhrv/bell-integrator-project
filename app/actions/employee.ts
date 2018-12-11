import axios from 'axios';
import { Dispatch } from 'redux';
import { createAsyncAction } from 'typesafe-actions';
import { IEmployee } from '../models';
import { AddEmployee, EditEmployee, EmployeesFetch, RemoveEmployee } from './consts';
import routes from './routes';

const employeesFetch = createAsyncAction(
  EmployeesFetch.REQUEST,
  EmployeesFetch.SUCCESS,
  EmployeesFetch.FAILURE,
)<void, IEmployee, Error>();

export const onEmployeesFetch = () => async (dispatch: Dispatch) => {
  dispatch(employeesFetch.request());
  try {
    const response = await axios.get(routes.employeesUrl());
    dispatch(employeesFetch.success(response.data));
  } catch (e) {
    dispatch(employeesFetch.failure(e.message));
  }
};

const addEmployee = createAsyncAction(
  AddEmployee.REQUEST,
  AddEmployee.SUCCESS,
  AddEmployee.FAILURE,
)<void, IEmployee, Error>();

export const onAddEmployee = (employee: IEmployee) => async (dispatch: Dispatch) => {
  dispatch(addEmployee.request());
  try {
    const response = await axios.post(routes.employeesUrl(), employee);
    dispatch(addEmployee.success(response.data));
  } catch (e) {
    dispatch(addEmployee.failure(e.message));
  }
};

const removeEmployee = createAsyncAction(
  RemoveEmployee.REQUEST,
  RemoveEmployee.SUCCESS,
  RemoveEmployee.FAILURE,
)<void, string, Error>();

export const onRemoveEmployee = (id: string) => async (dispatch: Dispatch) => {
  dispatch(removeEmployee.request());
  try {
    await axios.delete(routes.employeeUrl(id));
    dispatch(removeEmployee.success(id));
  } catch (e) {
    dispatch(removeEmployee.failure(e.message));
  }
};

const editEmployee = createAsyncAction(
  EditEmployee.REQUEST,
  EditEmployee.SUCCESS,
  EditEmployee.FAILURE,
)<void, IEmployee, Error>();

export const onEditEmployee = (employee: IEmployee) => async (dispatch: Dispatch) => {
  dispatch(editEmployee.request());
  try {
    const response = await axios.put(routes.employeeUrl(employee.id), employee);
    dispatch(editEmployee.success(response.data));
  } catch (e) {
    dispatch(editEmployee.failure(e.message));
  }
};
