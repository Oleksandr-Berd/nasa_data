import { Link } from 'react-router-dom';

export const NavBar = () => {
  const navItem = [
    { href: 'home', text: 'Home' },
    { href: 'apod', text: 'A picture of the day' },
  ];

  return (
    <nav>
      {navItem.map(({ href, text }) => (
        <Link to={href} key={href}>
          {text}
        </Link>
      ))}
    </nav>
  );
};
