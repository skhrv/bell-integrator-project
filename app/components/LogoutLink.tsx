import * as React from 'react';

interface ILogoutProps {
  onLogout: () => void;
}

const logoutLink = (props: ILogoutProps) => {
  const { onLogout } = props;
  const onClick = () => {
    onLogout();
  };

  return (
    <a
      href="/login"
      onClick={onClick}
    >Выйти
    </a>
  );
};

export { logoutLink as LogoutLink };
