import { connect } from 'react-redux';
import * as actionCreators from '../actions/dialogConfirmDelete';
import { DialogConfirmDelete } from '../components/DialogConfirmDelete';
import { IStoreState } from '../models';

const dialogConfirmDeleteContainer = connect(
  (state: IStoreState) => {
    const props = {
      open: state.dialogConfirmDelete.open,
      deleteId: state.dialogConfirmDelete.deleteId,
    };
    return props;
  },
  actionCreators,
)(DialogConfirmDelete);

export { dialogConfirmDeleteContainer as DialogConfirmDeleteContainer };
