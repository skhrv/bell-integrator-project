import { connect } from 'react-redux';
import * as companiesActionCreators from '../actions/companies';
import * as DialogConfirmDeleteActionCreators from '../actions/dialogConfirmDelete';
import * as ModalActionCreators from '../actions/modal';
import CompaniesList from '../components/CompaniesList';
import { IStoreState } from '../models';

const companiesListContainer = connect(
  (state: IStoreState) => {
    const props = {
      companies: state.companies,
      error: state.error,
      loading: state.loading,
      modal: state.modal,
      DialogConfirmDelete: state.dialogConfirmDelete,
    };
    return props;
  },
  { ...companiesActionCreators, ...ModalActionCreators, ...DialogConfirmDeleteActionCreators },
)(CompaniesList);

export { companiesListContainer as CompaniesListContainer };
