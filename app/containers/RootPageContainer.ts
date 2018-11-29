import { connect } from 'react-redux';
import { RootPage } from '../components/RootPage';
import { IStoreState } from '../reducers';

const rootPageContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
    };
    return props;
  },
  null,
)(RootPage);

export { rootPageContainer as RootPageContainer };
