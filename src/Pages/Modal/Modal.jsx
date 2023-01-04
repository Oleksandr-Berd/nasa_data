import { useEffect } from 'react';
import * as SC from './Modal.styled';

export const Modal = ({ onClose, hdurl, title }) => {
  const handleBackdropClick = evt => {
    if (evt.target !== evt.currenTarget) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', evt => {
      if (evt.code === 'Escape') {
        onClose();
      }
    });
  });

  return (
    <SC.OverlayModal onClick={handleBackdropClick}>
      <SC.ModalStyled>
        <SC.ImageModalTitle>{title}</SC.ImageModalTitle>
        <SC.ImageModal src={hdurl} alt={title} />
      </SC.ModalStyled>
    </SC.OverlayModal>
  );
};
