import * as React from 'react';

interface ILogoutProps {
  logout: () => void;
}

const logoutBtn = (props: ILogoutProps) => {
  const { logout } = props;
  const onClick = () => {
    logout();
  };

  return (
    <button
      onClick={onClick}
      type="button onClick={}"
      className="btn btn-secondary"
    >Log out
    </button>
  );
};

export { logoutBtn as LogoutBtn };
