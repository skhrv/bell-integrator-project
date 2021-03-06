export const LOGOUT = 'USER_LOGOUT';

export enum Login {
  REQUEST = 'LOGIN_REQUEST',
  SUCCESS = 'LOGIN_SUCCESS',
  FAILURE = 'LOGIN_FAILURE',
}

export enum Logout {
  REQUEST = 'LOGOUT_REQUEST',
  SUCCESS = 'LOGOUT_SUCCESS',
  FAILURE = 'LOGOUT_FAILURE',
}

export enum CompaniesFetch {
  REQUEST = 'COMPANIES_FETCH_REQUEST',
  SUCCESS = 'COMPANIES_FETCH_SUCCESS',
  FAILURE = 'COMPANIES_FETCH_FAILURE',
}

export enum AddCompany {
  REQUEST = 'COMPANY_ADD_REQUEST',
  SUCCESS = 'COMPANY_ADD_SUCCESS',
  FAILURE = 'COMPANY_ADD_FAILURE',
}

export enum RemoveCompany {
  REQUEST = 'COMPANY_REMOVE_REQUEST',
  SUCCESS = 'COMPANY_REMOVE_SUCCESS',
  FAILURE = 'COMPANY_REMOVE_FAILURE',
}

export enum EditCompany {
  REQUEST = 'COMPANY_EDIT_REQUEST',
  SUCCESS = 'COMPANY_EDIT_SUCCESS',
  FAILURE = 'COMPANY_EDIT_FAILURE',
}

export enum SubDivisionsFetch {
  REQUEST = 'SUBDIVISIONS_FETCH_REQUEST',
  SUCCESS = 'SUBDIVISIONS_FETCH_SUCCESS',
  FAILURE = 'SUBDIVISIONS_FETCH_FAILURE',
}

export enum AddSubDivision {
  REQUEST = 'SUBDIVISION_ADD_REQUEST',
  SUCCESS = 'SUBDIVISION_ADD_SUCCESS',
  FAILURE = 'SUBDIVISION_ADD_FAILURE',
}

export enum RemoveSubDivision {
  REQUEST = 'SUBDIVISION_REMOVE_REQUEST',
  SUCCESS = 'SUBDIVISION_REMOVE_SUCCESS',
  FAILURE = 'SUBDIVISION_REMOVE_FAILURE',
}

export enum EditSubDivision {
  REQUEST = 'SUBDIVISION_EDIT_REQUEST',
  SUCCESS = 'SUBDIVISION_EDIT_SUCCESS',
  FAILURE = 'SUBDIVISION_EDIT_FAILURE',
}

export enum EmployeesFetch {
  REQUEST = 'EMPLOYEES_FETCH_REQUEST',
  SUCCESS = 'EMPLOYEES_FETCH_SUCCESS',
  FAILURE = 'EMPLOYEES_FETCH_FAILURE',
}

export enum AddEmployee {
  REQUEST = 'EMPLOYEE_ADD_REQUEST',
  SUCCESS = 'EMPLOYEE_ADD_SUCCESS',
  FAILURE = 'EMPLOYEE_ADD_FAILURE',
}

export enum RemoveEmployee {
  REQUEST = 'EMPLOYEE_REMOVE_REQUEST',
  SUCCESS = 'EMPLOYEE_REMOVE_SUCCESS',
  FAILURE = 'EMPLOYEE_REMOVE_FAILURE',
}

export enum EditEmployee {
  REQUEST = 'EMPLOYEE_EDIT_REQUEST',
  SUCCESS = 'EMPLOYEE_EDIT_SUCCESS',
  FAILURE = 'EMPLOYEE_EDIT_FAILURE',
}

export enum Modal {
  CLOSE = 'MODAL_CLOSE',
  EDIT = 'MODAL_OPEN_EDIT',
  ADD = 'MODAL_OPEN_ADD',
}

export enum DialogConfirmDelete {
  CLOSE = 'DIALOG_CONFIRM_DELETE_CLOSE',
  OPEN = 'DIALOG_CONFIRM_DELETE_OPEN',
}
