import { connect } from 'react-redux';
import { App } from '../components/App';
import { IStoreState } from '../reducers';

const appContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
    };
    return props;
  },
)(App);

export { appContainer as AppContainer };
