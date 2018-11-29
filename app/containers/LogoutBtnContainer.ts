import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import { LogoutBtn } from '../components/LogoutBtn';

const logoutBtnContainer = connect(
  null,
  actionCreators,
)(LogoutBtn);

export { logoutBtnContainer as LogoutBtnContainer };
