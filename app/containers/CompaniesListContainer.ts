import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import CompaniesList from '../components/CompaniesList';
import { IStoreState } from '../reducers';

const companiesListContainer = connect(
  (state: IStoreState) => {
    const props = {
      companies: state.companies,
      error: state.error,
      loading: state.loading,
    };
    return props;
  },
  actionCreators,
)(CompaniesList);

export { companiesListContainer as CompaniesListContainer };
