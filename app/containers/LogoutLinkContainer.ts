import { connect } from 'react-redux';
import * as actionCreators from '../actions/authorization';
import { LogoutLink } from '../components/LogoutLink';

const LogoutLinkContainer = connect(
  null,
  actionCreators,
)(LogoutLink);

export default LogoutLinkContainer;
