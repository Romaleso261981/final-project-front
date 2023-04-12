import style from './UniversalModal.module.scss';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const UniversalModal = ({ toggleModal, children }) => {
  const escModalClose = (e) => {
    if (e.code === 'Escape') {
      toggleModal();
    }
  };

  const backdropModalClose = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', escModalClose);

    return () => {
      window.removeEventListener('keydown', escModalClose);
    };
  }, []);

  return (
    <>
      <div
        className={style.backdrop}
        onClick={backdropModalClose}
      >
        <div className={style.container}>
          <button
            type="button"
            className={style.btnCloseModal}
            onClick={toggleModal}
          >
            <AiOutlineClose />
          </button>
          <p className={style.question}>{children}</p>
          <div>
            <button
              type="button"
              className={style.btnYes}
              onClick={toggleModal}
            >
              Yes
            </button>
            <button
              type="button"
              className={style.btnNo}
              onClick={toggleModal}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversalModal;
