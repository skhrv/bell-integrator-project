import { combineReducers } from 'redux';
import { Login, Logout } from '../actions/consts';

export interface IStoreState {
  loginStatus: boolean;
  loading: boolean;
  error: string | null;
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
  }
  return state;
};

const error = (state: string | null = null, action: IAction) => {
  switch (action.type) {
    case Login.FAILURE:
      return action.payload;
    case Logout.FAILURE:
      return true;
    case Login.REQUEST:
      return null;
    case Logout.REQUEST:
      return null;
    case Login.SUCCESS:
      return null;
    case Logout.SUCCESS:
      return null;
  }
  return state;
};

export default combineReducers({ loginStatus, loading, error });
