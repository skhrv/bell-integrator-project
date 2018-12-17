import { connect } from 'react-redux';
import * as DialogConfirmDeleteActionCreators from '../actions/dialogConfirmDelete';
import * as ModalActionCreators from '../actions/modal';
import * as subDivisionssActionCreators from '../actions/subDivisions';
import SubDivisionsList from '../components/SubDivisionsList';

import { IStoreState } from '../models';

const SubDivisionsListContainer = connect(
  (state: IStoreState) => {
    const props = {
      subDivisions: state.subDivisions,
      error: state.error,
      loading: state.loading,
      modal: state.modal,
    };
    return props;
  },
  { ...subDivisionssActionCreators, ...ModalActionCreators, ...DialogConfirmDeleteActionCreators },
)(SubDivisionsList);

export default SubDivisionsListContainer;
