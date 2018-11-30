import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { RootPage } from '../components/RootPage';
import { IStoreState } from '../reducers';

const rootPageContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
    };
    return props;
  },
  actionCreators,
)(RootPage);

export { rootPageContainer as RootPageContainer };
