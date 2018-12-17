import { connect } from 'react-redux';
import HandleItemForm from '../components/HandleItemForm';
import { IStoreState } from '../models';

const HandleItemFormContainer = connect(
  (state: IStoreState) => {
    const props = {
      networkError: state.error,
      loading: state.loading,
    };
    return props;
  },
)(HandleItemForm);

export default HandleItemFormContainer;
