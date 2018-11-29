import { combineReducers } from 'redux';
import { Login, LOGOUT } from '../actions/consts';

export interface IStoreState {
  loginStatus: boolean;
  loading: boolean;
}

export interface IAction {
  type: string;
  payload?: any;
}

const loginStatus = (state: boolean = false, action: IAction) => {
  switch (action.type) {
    case Login.SUCCESS:
      return true;
    case LOGOUT:
      return false;
    case Login.FAILURE:
      return false;
    case Login.REQUEST:
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
  }
  return state;
};

export default combineReducers({ loginStatus, loading });
