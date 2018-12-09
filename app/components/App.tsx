import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import { CompaniesListContainer } from '../containers/CompaniesListContainer';
import { LoginContainer } from '../containers/LoginContainer';
import { LogoutLinkContainer } from '../containers/LogoutLinkContainer';
import { PrivateRouteContainer } from '../containers/PrivateRouteContainer';
import { SubDivisionListContainer } from '../containers/SubDivisionListContainer';

interface IProps {
  loginStatus: boolean;
}

const app = (props: IProps) => {
  const { loginStatus } = props;
  const renderLoginPage = () => (
    props.loginStatus ? (<Redirect to="/companies" />)
      : (<LoginContainer />)
  );
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-light bg-light mb-4">
          <Link to="/">Главная</Link>
          {loginStatus && (<LogoutLinkContainer />) || (<Link to="/login">Войти</Link>)}
        </nav>

        <Switch>
          <Redirect
            exact={true}
            from="/"
            to="/login"
          />
          <Route path="/login" render={renderLoginPage} />
          <PrivateRouteContainer
            path="/sub_divisions/:companyId"
            component={SubDivisionListContainer}
          />
          <PrivateRouteContainer path="/companies/" component={CompaniesListContainer} />
        </Switch>

      </div>
    </Router>
  );
};
export { app as App };
