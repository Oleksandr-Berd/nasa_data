import { useEffect } from 'react';
import { useState } from 'react';
import { getApod } from 'Utilities/APOD/ApodGet';
import { Link, useLocation } from 'react-router-dom';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import * as SC from './APOD.styled';

export const APOD = () => {
  const [image, setImage] = useState('');
  const location = useLocation();

  useEffect(() => {
    getApod().then(setImage);
  }, []);

  const backgroundImage =
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';

  const { copyright, date, explanation, hdurl, url, title } = image;
  return (
    <SC.ContainerApod>
      <SC.ApodStyled imgUrl={backgroundImage}>
        <SC.TitleStyled>{title}</SC.TitleStyled>
        <img src={url} alt={title} />
        <SC.ContainerTextStyled>
          <SC.DataStyled>{date}</SC.DataStyled>
          <SC.CopyrightStyled>{copyright}</SC.CopyrightStyled>
          <SC.ExplanationStyled>{explanation}</SC.ExplanationStyled>
        </SC.ContainerTextStyled>
        <SC.ContainerButtonStyled>
          <TwitterShareButton url={url}>
            <TwitterIcon round={true} />
          </TwitterShareButton>
          <Link to="/home" state={{ from: location }}>
            <SC.ButtonBackApod>Go back</SC.ButtonBackApod>
          </Link>
        </SC.ContainerButtonStyled>
      </SC.ApodStyled>
    </SC.ContainerApod>
  );
};
