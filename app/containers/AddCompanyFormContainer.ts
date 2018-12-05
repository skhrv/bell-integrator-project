import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import AddCompanyForm from '../components/AddCompanyForm';
import { IStoreState } from '../reducers';

const addCompanyFormContainer = connect(
  (state: IStoreState) => {
    const props = {
      networkError: state.error,
      loading: state.loading,
    };
    return props;
  },
  actionCreators,
)(AddCompanyForm);

export { addCompanyFormContainer as AddCompanyFormContainer };
