import * as React from 'react';

interface IAlert {
  message: string;
}
const alert = (props: IAlert) => {
  const { message } = props;
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  );
};
export { alert as Alert };
