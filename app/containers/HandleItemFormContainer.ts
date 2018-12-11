import { connect } from 'react-redux';
import HandleItemForm from '../components/HandleItemForm';
import { IStoreState } from '../models';

const handleItemFormContainer = connect(
  (state: IStoreState) => {
    const props = {
      networkError: state.error,
      loading: state.loading,
    };
    return props;
  },
)(HandleItemForm);

export { handleItemFormContainer as HandleItemFormContainer };
