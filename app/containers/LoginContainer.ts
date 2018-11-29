import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import Login from '../components/Login';
import { IStoreState } from '../reducers';

const loginContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
      loading: state.loading,
    };
    return props;
  },
  actionCreators,
)(Login);

export { loginContainer as LoginContainer };
