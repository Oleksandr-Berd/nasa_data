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
  font-family: 'Aclonica';
  background: #afdbf5;
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
  border-radius: 4px;
`;

export const ButtonBackApod = styled.button`
  padding: 15px;
  margin-left: 50px;
  font-size: 20px;
  width: 125px;
  border-radius: 4px;
  font-weight: bold;
  font-family: 'Actor';
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background: #89cff0;
  }
`;

export const ContainerButtonStyled = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 20px;
`;
