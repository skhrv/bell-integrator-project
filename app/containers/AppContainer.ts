import { connect } from 'react-redux';
import { App } from '../components/App';
import { IStoreState } from '../models';

const AppContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
    };
    return props;
  },
)(App);

export default AppContainer;
