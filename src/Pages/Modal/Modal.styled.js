import styled from 'styled-components';

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: absolute;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  color: white;
  font-weight: bold;
  background-color: black;
  text-align: center;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const ImageModal = styled.img`
  width: 1600px;
  height: 1300px;
`;

export const ImageModalTitle = styled.p`
  color: white;
  font-size: 20px;
`;
