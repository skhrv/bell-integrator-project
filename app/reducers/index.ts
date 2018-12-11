import immutabilityHelper from 'immutability-helper';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  AddCompany,
  AddEmployee,
  AddSubDivision,
  CompaniesFetch,
  EditCompany,
  EditEmployee,
  EditSubDivision,
  EmployeesFetch,
  Login,
  Logout,
  Modal,
  RemoveCompany,
  RemoveEmployee,
  RemoveSubDivision,
  SubDivisionsFetch,
} from '../actions/consts';
import { IAction, ICompany, IEmployee, IModalState, ISubDivision } from '../models';

const loginStatus = (state: boolean = false, action: IAction) => {
  switch (action.type) {
    case Login.SUCCESS:
      return true;
    case Logout.SUCCESS:
      return false;
  }
  return state;
};

const loading = (state: boolean = false, action: IAction) => {
  switch (action.type) {
    case Login.REQUEST:
    case Logout.REQUEST:

    case AddCompany.REQUEST:
    case RemoveCompany.REQUEST:
    case EditCompany.REQUEST:
    case CompaniesFetch.REQUEST:

    case AddSubDivision.REQUEST:
    case RemoveSubDivision.REQUEST:
    case EditSubDivision.REQUEST:
    case SubDivisionsFetch.REQUEST:

    case AddEmployee.REQUEST:
    case RemoveEmployee.REQUEST:
    case EditEmployee.REQUEST:
    case EmployeesFetch.REQUEST:
      return true;

    case Login.SUCCESS:
    case Logout.SUCCESS:
    case Login.FAILURE:
    case Logout.FAILURE:

    case AddCompany.SUCCESS:
    case RemoveCompany.SUCCESS:
    case EditCompany.SUCCESS:
    case CompaniesFetch.SUCCESS:
    case AddCompany.FAILURE:
    case RemoveCompany.FAILURE:
    case EditCompany.FAILURE:
    case CompaniesFetch.FAILURE:

    case AddSubDivision.SUCCESS:
    case SubDivisionsFetch.SUCCESS:
    case RemoveSubDivision.SUCCESS:
    case EditSubDivision.SUCCESS:
    case AddSubDivision.FAILURE:
    case RemoveSubDivision.FAILURE:
    case EditSubDivision.FAILURE:
    case SubDivisionsFetch.FAILURE:

    case AddEmployee.SUCCESS:
    case RemoveEmployee.SUCCESS:
    case EmployeesFetch.SUCCESS:
    case EditEmployee.SUCCESS:
    case AddEmployee.FAILURE:
    case RemoveEmployee.FAILURE:
    case EditEmployee.FAILURE:
    case EmployeesFetch.FAILURE:
      return false;
  }
  return state;
};

const error = (state: string = null, action: IAction) => {
  switch (action.type) {
    case Login.REQUEST:
    case Login.SUCCESS:
    case Logout.REQUEST:
    case Logout.SUCCESS:

    case AddCompany.REQUEST:
    case RemoveCompany.REQUEST:
    case EditCompany.REQUEST:
    case CompaniesFetch.REQUEST:

    case AddSubDivision.REQUEST:
    case RemoveSubDivision.REQUEST:
    case EditSubDivision.REQUEST:
    case SubDivisionsFetch.REQUEST:

    case AddCompany.SUCCESS:
    case EditCompany.SUCCESS:
    case RemoveCompany.SUCCESS:
    case CompaniesFetch.SUCCESS:

    case AddSubDivision.SUCCESS:
    case RemoveSubDivision.SUCCESS:
    case EditSubDivision.SUCCESS:
    case SubDivisionsFetch.SUCCESS:

    case AddEmployee.REQUEST:
    case RemoveEmployee.REQUEST:
    case EditEmployee.REQUEST:
    case EmployeesFetch.REQUEST:

    case AddEmployee.SUCCESS:
    case RemoveEmployee.SUCCESS:
    case EmployeesFetch.SUCCESS:
    case EditEmployee.SUCCESS:
      return null;

    case Login.FAILURE:
    case Logout.FAILURE:

    case CompaniesFetch.FAILURE:
    case AddCompany.FAILURE:
    case RemoveCompany.FAILURE:
    case EditCompany.FAILURE:

    case AddSubDivision.FAILURE:
    case RemoveSubDivision.FAILURE:
    case EditSubDivision.FAILURE:
    case SubDivisionsFetch.FAILURE:

    case AddEmployee.FAILURE:
    case RemoveEmployee.FAILURE:
    case EditEmployee.FAILURE:
    case EmployeesFetch.FAILURE:
      return action.payload;
  }
  return state;
};

const companies = (state: ICompany[] = [], action: IAction) => {
  switch (action.type) {
    case CompaniesFetch.SUCCESS:
      return action.payload;
    case AddCompany.SUCCESS:
      return [...state, action.payload];
    case RemoveCompany.SUCCESS: {
      return state.filter(({ id }) => id !== action.payload);
    }
    case EditCompany.SUCCESS: {
      const index = state.findIndex(company => company.id === action.payload.id);
      return immutabilityHelper(state, { [index]: { $set: action.payload } });
    }
  }
  return state;
};

const subDivisions = (state: ISubDivision[] = [], action: IAction) => {
  switch (action.type) {
    case SubDivisionsFetch.SUCCESS:
      return action.payload;
    case AddSubDivision.SUCCESS:
      return [...state, action.payload];
    case RemoveSubDivision.SUCCESS:
      return state.filter(({ id }) => id !== action.payload);
    case EditSubDivision.SUCCESS: {
      const index = state.findIndex(subDivision => subDivision.id === action.payload.id);
      return immutabilityHelper(state, { [index]: { $set: action.payload } });
    }
  }
  return state;
};

const employees = (state: IEmployee[] = [], action: IAction) => {
  switch (action.type) {
    case EmployeesFetch.SUCCESS:
      return action.payload;
    case AddEmployee.SUCCESS:
      return [...state, action.payload];
    case RemoveEmployee.SUCCESS:
      return state.filter(({ id }) => id !== action.payload);
    case EditEmployee.SUCCESS: {
      const index = state.findIndex(employee => employee.id === action.payload.id);
      return immutabilityHelper(state, { [index]: { $set: action.payload } });
    }
  }
  return state;
};

const modalInitState: IModalState = {
  open: false,
  mode: null,
  currentItemEdit: null,
};

const modal = (state: IModalState = modalInitState, action: IAction) => {
  switch (action.type) {
    case Modal.CLOSE:
      return { ...state, open: false };
    case Modal.ADD:
      return { ...state, mode: 'add', open: true };
    case Modal.EDIT:
      return { ...state, mode: 'edit', open: true, currentItemEdit: action.payload };
  }
  return state;
};

export default combineReducers({
  companies,
  error,
  employees,
  loginStatus,
  loading,
  modal,
  subDivisions,
  form: formReducer,
});
