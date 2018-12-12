import * as React from 'react';

const loader = () => (
  <div className="loader-inner ball-pulse d-flex justify-content-center">
    <div className="bg-primary" />
    <div className="bg-primary" />
    <div className="bg-primary" />
  </div>
);

export { loader as Loader };
