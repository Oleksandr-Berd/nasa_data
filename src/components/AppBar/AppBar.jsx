import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import * as SC from './AppBar.styled';

export const AppBar = () => {
  return (
    <SC.AppBarStyled>
      <NavBar />
      <Outlet />
    </SC.AppBarStyled>
  );
};
