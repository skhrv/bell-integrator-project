import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface ICustomProps extends RouteProps {
  loginStatus: boolean;
}

const privateRoute = (props: ICustomProps) => {
  // tslint:disable-next-line:variable-name
  const { component: Component, loginStatus, ...rest } = props;
  const render = (rProps: RouteProps) => {
    const loginPage = {
      pathname: '/login',
      state: { from: rProps.location },
    };

    return (loginStatus ? (<Component {...rProps} />)
      : (
        <Redirect
          to={loginPage}
        />));
  };
  return (
    <Route {...rest} render={render} />
  );
};

export { privateRoute as PrivateRoute };
