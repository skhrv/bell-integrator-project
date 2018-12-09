import { connect } from 'react-redux';
import * as actionCreators from '../actions/authorization';
import Login from '../components/Login';
import { IStoreState } from '../reducers';

const loginContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
      loading: state.loading,
      error: state.error,
    };
    return props;
  },
  actionCreators,
)(Login);

export { loginContainer as LoginContainer };
