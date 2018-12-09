import { connect } from 'react-redux';
import { PrivateRoute } from '../components/PrivateRoute';
import { IStoreState } from '../reducers';

const privateRouteContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
    };
    return props;
  },
)(PrivateRoute);

export { privateRouteContainer as PrivateRouteContainer };
