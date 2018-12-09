import { connect } from 'react-redux';
import * as actionCreators from '../actions/subDivisionActions';
import SubDivisionList from '../components/SubDivisionList';
import { IStoreState } from '../reducers';

const subDivisionListContainer = connect(
  (state: IStoreState) => {
    const props = {
      subDivisions: state.subDivisions,
      error: state.error,
      loading: state.loading,
    };
    return props;
  },
  actionCreators,
)(SubDivisionList);

export { subDivisionListContainer as SubDivisionListContainer };
