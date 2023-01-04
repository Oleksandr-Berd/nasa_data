import * as SC from '../APOD/APOD.styled';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as SCF from './Imagery.styled';

export const Imagery = () => {
  const location = useLocation();
  const [imagery, setImagery] = useState('');

  const {} = imagery;
  return (
    <SCF.Form>
      <SCF.ContainerForm>
        <SCF.FormStyled>
          <SCF.Label>
            <SCF.InputText>Latitude; lat; type: float</SCF.InputText>
            <SCF.Input type="number" />
          </SCF.Label>
          <SCF.Label>
            <SCF.InputText>Longitude; lon; type: float</SCF.InputText>
            <SCF.Input type="number" />
          </SCF.Label>
          <SCF.Label>
            <SCF.InputText>
              width and height of image in degrees; lat; type: float
            </SCF.InputText>
            <SCF.Input type="number" />
          </SCF.Label>
          <SCF.ButtonBackImagery>Submit</SCF.ButtonBackImagery>
        </SCF.FormStyled>
      </SCF.ContainerForm>
      <SC.ContainerButtonStyled>
        <TwitterShareButton>
          <TwitterIcon round={true} />
        </TwitterShareButton>
        <Link to="/home" state={{ from: location }}>
          <SC.ButtonBackApod>Go back</SC.ButtonBackApod>
        </Link>
      </SC.ContainerButtonStyled>
    </SCF.Form>
  );
};
