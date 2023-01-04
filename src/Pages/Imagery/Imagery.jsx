import * as SC from '../APOD/APOD.styled';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import * as SCF from './Imagery.styled';
import { background } from '../../Utilities/Images/background';
import { useEffect } from 'react';
import { imageryGet } from 'Utilities/Imagery/ImageryGet';

export const Imagery = () => {
  const location = useLocation();
  const [imagery, setImagery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [dim, setDim] = useState('');
  const [query, setQuery] = useState([]);

  const handleInput = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'lat':
        setLat(value);
        break;
      case 'lon':
        setLon(value);
        break;
      case 'dim':
        setDim(value);
        break;
      default:
        return;
    }
  };

  const submit = (lat, lon) => {
    setQuery([{ lat, lon }]);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    submit(lat, lon);
  };

  useEffect(() => {
    setLoading(true);
    imageryGet({ lat, lon }).then(console.log);
  }, [query]);

  return (
    <SCF.Form imgUrl={background}>
      <SCF.ContainerForm>
        <SCF.FormStyled onSubmit={handleSubmit}>
          <SCF.Label>
            <SCF.InputText>Latitude; lat; type: float</SCF.InputText>
            <SCF.Input
              type="number"
              name="lat"
              value={lat}
              required
              onChange={handleInput}
            />
          </SCF.Label>
          <SCF.Label>
            <SCF.InputText>Longitude; lon; type: float</SCF.InputText>
            <SCF.Input
              type="number"
              name="lon"
              value={lon}
              required
              onChange={handleInput}
            />
          </SCF.Label>
          <SCF.Label>
            <SCF.InputText>
              width and height of image in degrees; dim; type: float
            </SCF.InputText>
            <SCF.Input
              type="number"
              name="dim"
              value={dim}
              onChange={handleInput}
            />
          </SCF.Label>
          <SCF.ButtonBackImagery>Submit</SCF.ButtonBackImagery>
        </SCF.FormStyled>
        <SCF.Description>
          At this page you can retrieve the Landsat 8 image for the supplied
          location.
        </SCF.Description>
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
