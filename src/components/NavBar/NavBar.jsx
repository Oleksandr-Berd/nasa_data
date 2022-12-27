import { Link } from 'react-router-dom';
import * as SC from './NavBar.styled';

export const NavBar = () => {
  const navItem = [
    { href: 'home', text: 'Home' },
    { href: 'apod', text: 'A picture of the day' },
  ];

  return (
    <nav>
      {navItem.map(({ href, text }) => (
        <Link to={href} key={href}>
          <SC.NavLinkStyled> {text}</SC.NavLinkStyled>
        </Link>
      ))}
    </nav>
  );
};
