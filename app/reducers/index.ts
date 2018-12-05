import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ICompany } from '../actions';
import { AddCompany, CompaniesFetch, Login, Logout, RemoveCompany } from '../actions/consts';

export interface IStoreState {
  loginStatus: boolean;
  loading: boolean;
  error: string | null;
  companies: ICompany[];
}

export interface IAction {
  type: string;
  payload?: any;
}

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
    case Login.SUCCESS:
      return false;
    case Login.FAILURE:
      return false;
    case Login.REQUEST:
      return true;
    case Logout.SUCCESS:
      return false;
    case Logout.FAILURE:
      return false;
    case Logout.REQUEST:
      return true;
    case AddCompany.REQUEST:
      return true;
    case AddCompany.SUCCESS:
      return false;
    case AddCompany.FAILURE:
      return false;
    case CompaniesFetch.REQUEST:
      return true;
    case CompaniesFetch.SUCCESS:
      return false;
    case CompaniesFetch.FAILURE:
      return false;
  }
  return state;
};

const error = (state: string = null, action: IAction) => {
  switch (action.type) {
    case Login.FAILURE:
      return action.payload;
    case Logout.FAILURE:
      return action.payload;
    case Login.REQUEST:
      return null;
    case Logout.REQUEST:
      return null;
    case Login.SUCCESS:
      return null;
    case Logout.SUCCESS:
      return null;
    case CompaniesFetch.SUCCESS:
      return null;
    case AddCompany.SUCCESS:
      return null;
    case RemoveCompany.SUCCESS:
      return null;
    case CompaniesFetch.FAILURE:
      return action.payload;
    case AddCompany.FAILURE:
      return action.payload;
    case RemoveCompany.FAILURE:
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
    case RemoveCompany.SUCCESS:
      return state.filter(({ id }) => id !== action.payload.id);
  }
  return state;
};

export default combineReducers({ loginStatus, loading, error, companies, form: formReducer });
