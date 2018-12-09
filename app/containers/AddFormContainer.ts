import { connect } from 'react-redux';
import AddForm from '../components/AddForm';
import { IStoreState } from '../reducers';

const addFormContainer = connect(
  (state: IStoreState) => {
    const props = {
      networkError: state.error,
      loading: state.loading,
    };
    return props;
  },
)(AddForm);

export { addFormContainer as AddFormContainer };
