import style from "./ModalWithoutBalance.module.scss";

const ModalWithoutBalance = () => {
  return (
    <>
      <div className={style.container}>
        <p className={style.helloText}>
          Hello! To get started, enter the current balance of your account!
        </p>
        <p className={style.descrText}>
          You can't spend money until you have it :)
        </p>
      </div>
    </>
  );
};

export default ModalWithoutBalance;
