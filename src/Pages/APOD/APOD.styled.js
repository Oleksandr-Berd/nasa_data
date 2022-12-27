import styled from 'styled-components';

export const ApodStyled = styled.div`
  padding: 10px 60px;

  background: ${props => `url(${props.imgUrl})`};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ExplanationStyled = styled.p`
  font-size: 30px;
`;

export const TitleStyled = styled.h1`
  font-family: 'Dancing Script', cursive;
  font-size: 50px;
  color: whitesmoke;
`;

export const DataStyled = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

export const ContainerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 925px;

  background: lightblue;
  padding: 20px 20px;
  border-radius: 4px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const CopyrightStyled = styled.p`
  font-style: italic;
  font-weight: bold;
`;

export const ContainerApod = styled.div`
  padding: 30px 0;
`;

export const ButtonBackApod = styled.button`
  padding: 20px;
`;
