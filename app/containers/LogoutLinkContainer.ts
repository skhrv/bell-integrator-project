import { connect } from 'react-redux';
import * as actionCreators from '../actions/authorization';
import { LogoutLink } from '../components/LogoutLink';

const logoutLinkContainer = connect(
  null,
  actionCreators,
)(LogoutLink);

export { logoutLinkContainer as LogoutLinkContainer };
