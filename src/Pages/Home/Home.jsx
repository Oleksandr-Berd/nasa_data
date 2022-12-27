import { Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <h1>Here is the Home page!</h1>
      <Outlet />
    </div>
  );
};
