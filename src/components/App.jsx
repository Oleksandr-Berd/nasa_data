import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Home } from 'Pages/Home/Home';
import { APOD } from 'Pages/APOD/APOD';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Navigate to="/home" />}></Route>
          <Route path="home" element={<Home />} />
          <Route path="apod" element={<APOD />} />
        </Route>
      </Routes>
    </div>
  );
};
