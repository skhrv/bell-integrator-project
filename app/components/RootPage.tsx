import * as React from 'react';
import { CompaniesListContainer } from '../containers/CompaniesListContainer';
import { LoginContainer } from '../containers/LoginContainer';

interface IRootPageProps {
  loginStatus: boolean;
}

const rootPage = (props: IRootPageProps) => {
  const { loginStatus } = props;
  return (
    loginStatus ? (
      <CompaniesListContainer />
    ) : (
        <LoginContainer />
      ));
};

export { rootPage as RootPage };
