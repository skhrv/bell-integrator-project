import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect, Route, Switch } from 'react-router-dom';
import LoginContainer from '../containers/LoginContainer';
import LogoutLinkContainer from '../containers/LogoutLinkContainer';
import PrivateRouteContainer from '../containers/PrivateRouteContainer';
import Loader from './Loader';

const CompaniesListContainer = React.lazy(() =>
  // tslint:disable-next-line:space-in-parens
  import(/* webpackChunkName: "companies" */'../containers/CompaniesListContainer'));
const EmployeesListContainer = React.lazy(() =>
  // tslint:disable-next-line:space-in-parens
  import(/* webpackChunkName: "employees" */ '../containers/EmployeesListContainer'));
const SubDivisionsListContainer = React.lazy(() =>
  // tslint:disable-next-line:space-in-parens
  import(/* webpackChunkName: "subDivisions" */ '../containers/SubDivisionsListContainer'));

interface IProps {
  loginStatus: boolean;
}

export const modalStyles = {
  content: {
    top: '30%',
    left: '30%',
    right: '30%',
    bottom: 'auto',
    transform: 'translateY(-30%)',
  },
};

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

        <React.Suspense fallback={<Loader />}>
          <Switch>
            <Redirect
              exact={true}
              from="/"
              to="/login"
            />
            <Route path="/login" render={renderLoginPage} />
            <PrivateRouteContainer
              path="/companies/:companyId/:subDivisionId"
              component={EmployeesListContainer}
            />
            <PrivateRouteContainer
              path="/companies/:companyId"
              component={SubDivisionsListContainer}
            />
            <PrivateRouteContainer path="/companies/" component={CompaniesListContainer} />
          </Switch>
        </React.Suspense>

      </div>
    </Router>
  );
};
export { app as App };
