import * as React from 'react';
import { LoginContainer } from '../containers/LoginContainer';
import CompaniesList from './CompaniesList';

interface IRootPageProps {
  loginStatus?: boolean; // пришлось сделать опциональным, по другому не работает
}

const rootPage = (props: IRootPageProps) => {
  const { loginStatus } = props;
  return (
    loginStatus ? (
      <CompaniesList />
    ) : (
        <LoginContainer />
      ));
};

export { rootPage as RootPage };
