import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 250px 0;
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputText = styled.span`
  color: #fff;
  font-size: 50px;
`;

export const Input = styled.input`
  margin-top: 25px;
  width: 500px;
  height: 50px;
  font-size: 40px;
`;

export const ButtonBackImagery = styled.button`
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

export const Description = styled.p`
  color: #fff;
  font-size: 30px;
  margin-top: 30px;
`;
