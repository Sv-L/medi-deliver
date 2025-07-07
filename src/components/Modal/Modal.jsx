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
    // document.body.style.overflow = 'hidden';
    // const paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';

    // document.body.style.paddingRight = paddingOffSet;
    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
      //   document.body.style.overflow = 'auto';
      //   document.body.style.paddingRight = '0px';
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
