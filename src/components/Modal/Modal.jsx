import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalStyled } from './ModalStyled';
import CloseBtnIcon from '../../assets/images/close-btn.svg?react'

const modalRoot = document.getElementById('modal-backdrop');

export const Modal = ({ children, closeModal, className }) => {
  useEffect(() => {
    function onEsc({ code }) {
      if (code !== 'Escape') {
        return;
      }

      closeModal();
    }
   
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [closeModal]);

  const onBackdrop = ({ target, currentTarget }) => {
    if (target !== currentTarget) {
      return;
    }
    closeModal();
  };

  return createPortal(
    <ModalStyled onClick={onBackdrop}>
      <div className={className}>
        <button
          type="button"
          onClick={() => closeModal()}
          className="close-btn"
        >
          <CloseBtnIcon/>
        </button>
        {children}
      </div>
    </ModalStyled>,
    modalRoot
  );
};

export default Modal;
