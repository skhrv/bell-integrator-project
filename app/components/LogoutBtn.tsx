import * as React from 'react';

interface ILogoutProps {
  onLogout: () => void;
}

const logoutBtn = (props: ILogoutProps) => {
  const { onLogout } = props;
  const onClick = () => {
    onLogout();
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
