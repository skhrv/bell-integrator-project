import * as React from 'react';
import { LogoutBtnContainer } from '../containers/LogoutBtnContainer';

export default class CompaniesList extends React.Component {
  public render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <LogoutBtnContainer />
      </nav >
    );
  }
}
