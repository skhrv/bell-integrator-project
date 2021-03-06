import { connect } from 'react-redux';
import PrivateRoute from '../components/PrivateRoute';
import { IStoreState } from '../models';

const PrivateRouteContainer = connect(
  (state: IStoreState) => {
    const props = {
      loginStatus: state.loginStatus,
    };
    return props;
  },
)(PrivateRoute);

export default PrivateRouteContainer;
