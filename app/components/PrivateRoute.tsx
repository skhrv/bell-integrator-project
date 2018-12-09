import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface ICustomProps {
  loginStatus: boolean;
}

type Props = ICustomProps & RouteProps;

const privateRoute = (props: Props) => {
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