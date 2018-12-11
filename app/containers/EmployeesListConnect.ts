import { connect } from 'react-redux';
import * as DialogConfirmDeleteActionCreators from '../actions/dialogConfirmDelete';
import * as employeesActionCreators from '../actions/employee';
import * as ModalActionCreators from '../actions/modal';
import EmployeesList from '../components/EmployeesList';
import { IStoreState } from '../models';

const employeesListContainer = connect(
  (state: IStoreState) => {
    const props = {
      employees: state.employees,
      error: state.error,
      loading: state.loading,
      modal: state.modal,
      dialogConfirmDelete: state.dialogConfirmDelete,
    };
    return props;
  },
  { ...employeesActionCreators, ...ModalActionCreators, ...DialogConfirmDeleteActionCreators },
)(EmployeesList);

export { employeesListContainer as EmployeesListContainer };
