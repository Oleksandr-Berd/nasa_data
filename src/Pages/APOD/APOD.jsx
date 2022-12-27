import { useEffect } from 'react';
import { useState } from 'react';
import { getApod } from 'Utilities/APOD/ApodGet';
import { Link, useLocation } from 'react-router-dom';
import * as SC from './APOD.styled';

export const APOD = () => {
  const [image, setImage] = useState('');
  const location = useLocation();

  useEffect(() => {
    getApod().then(setImage);
  }, []);

  const { copyright, date, explanation, hdurl, url, title } = image;
  return (
    <div>
      <SC.ApodStyled>
        <h1>{title}</h1>
        <img src={url} alt={title} />
        <p>{date}</p>
        <p>{copyright}</p>
        <SC.ExplanationStyled>{explanation}</SC.ExplanationStyled>
      </SC.ApodStyled>
      <Link to="/home" state={{ from: location }}>
        Go back
      </Link>
    </div>
  );
};
