import { useEffect } from 'react';
import { useState } from 'react';
import { getApod } from 'Utilities/APOD/ApodGet';

export const APOD = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    getApod().then(setImage);
  }, []);

  const { copyright, date, explanation, hdurl, url, title } = image;
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <img src={url} alt={title} />
        <p>{date}</p>
        <p>{copyright}</p>
        <p>{explanation}</p>
      </div>
    </div>
  );
};
