import { createPortal } from "react-dom";
import { BackDrop, Close, Modal, Title, WrapBtn } from "./Popup.styled";
import { Btn } from "../../components/Buttons/Btn";
import { getLang } from "../../redux/lang/langSelectors";
import { useSelector } from "react-redux";

export const Popup = ({ popup, setPopup }) => {
  const lang = useSelector(getLang).lang;

  const handleLogout = () => {
    popup.action();
    closePopup();
  };

  const closePopup = () => {
    setPopup((prevState) => ({ ...prevState, isShow: false }));
    document.querySelector("#modal").classList.remove("js-action");
  };

  const onClickBackDrop = (event) => {
    if (event.target === event.currentTarget) closePopup();
    closePopup();
  };

  return createPortal(
    <BackDrop onClick={onClickBackDrop} id="backdrop">
      <Modal>
        {/* <Close onClick={closePopup}>
          <svg>
            <use href={sprite + "#close"} width="12px" height="12px"></use>
          </svg>
        </Close> */}
        <Title>{popup.title}</Title>
        <WrapBtn>
          <Btn
            type="button"
            text={lang === "en" ? "Yes" : "Так"}
            onClick={handleLogout}
          />
          <Btn
            type="button"
            text={lang === "en" ? "No" : "Ні"}
            onClick={closePopup}
          />
        </WrapBtn>
      </Modal>
    </BackDrop>,
    document.querySelector("#modal")
  );
};
