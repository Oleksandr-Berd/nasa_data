import { useEffect } from 'react';
import { useState } from 'react';
import { getApod } from 'Utilities/APOD/ApodGet';
import { Link, useLocation } from 'react-router-dom';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import * as SC from './APOD.styled';
import { Dna } from 'react-loader-spinner';
import { Modal } from 'Pages/Modal/Modal';

export const APOD = () => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    getApod()
      .then(setImage)
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const toggleModal = evt => setShowModal(!showModal);

  const backgroundImage =
    'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80';

  const { copyright, date, explanation, url, title, hdurl } = image;
  return (
    <SC.ContainerApod>
      {error && <>Sometimes SHT happens 😎</>}
      {loading ? (
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      ) : (
        <SC.ApodStyled imgUrl={backgroundImage}>
          <SC.TitleStyled>{title}</SC.TitleStyled>
          <img src={url} alt={title} onClick={toggleModal} />
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
          {showModal && (
            <Modal hdurl={hdurl} title={title} onClose={toggleModal}></Modal>
          )}
        </SC.ApodStyled>
      )}
    </SC.ContainerApod>
  );
};
