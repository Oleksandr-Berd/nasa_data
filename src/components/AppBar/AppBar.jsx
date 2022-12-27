import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <NavBar />
      <Outlet />
    </header>
  );
};
