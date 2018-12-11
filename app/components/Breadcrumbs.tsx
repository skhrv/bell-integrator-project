import * as React from 'react';
import { Link, Route, RouteProps } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbItemProps } from 'reactstrap';

const routes: { [index: string]: string } = {
  // '/': 'Home',
  '/companies': 'Компании',
  '/companies/:companyId': 'Подразделения',
  '/settings/a/b': 'B',
};

const findRouteName = (url: string) => routes[url];

const getPaths = (pathname: string) => {
  const paths = ['/'];

  if (pathname === '/') return paths;

  pathname.split('/').reduce((prev, curr) => {
    const currPath = `${prev}/${curr}`;
    paths.push(currPath);
    return currPath;
  });

  return paths;
};

const breadcrumbsItem = (props: BreadcrumbItemProps) => {
  const { match } = props;
  const routeName = findRouteName(match.url);
  if (routeName) {
    return (
      match.isExact ?
        (
          <BreadcrumbItem active={true}>{routeName}</BreadcrumbItem>
        ) :
        (
          <BreadcrumbItem>
            <Link to={match.url || ''}>
              {routeName}
            </Link>
          </BreadcrumbItem>
        )
    );
  }
  return null;
};

const breadcrumbs = (props: RouteProps) => {
  const { location: { pathname } } = props;
  const paths = getPaths(pathname);
  return (
    <Breadcrumb>
      {paths.map(p => <Route key={p} path={p} component={breadcrumbsItem} />)}
    </Breadcrumb>
  );
};

const breadcrumbsRoute = (props: RouteProps) => (
  <div>
    <Route path="/:path" component={breadcrumbs} {...props} />
  </div>
);
export { breadcrumbsRoute as Breadcrumbs };
