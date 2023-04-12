import {
  StyledHeader,
  LogoContainer,
  Block,
  LogoSvg,
  StyledContainer,
  Img,
  Avatar,
  Name,
  Line,
  Exit,
  ExitText,
  ExitSvg,
  ControlsWrapper,
} from "./Header.styled";
// import { useAuth } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { selectAccessToken } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import svg from "../../assets/image/icons_sprite.svg";
import { Popup } from "../../components/Popup/Popup";
import { ThemeSwitcher } from "../../components/ThemeBtn/ThemeBtn";
import { LangSwitcher } from "../../components/LanguageBtn/LangBtn";
import { getLang } from "../../redux/lang/langSelectors";

export function Header() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  // const token = useSelector(selectAccessToken);
  const token = null;

  const [popup, setPopup] = useState({
    isShow: false,
    title: "",
    action: null,
  });

  const lang = useSelector(getLang).lang;

  const handleExit = () => {
    setPopup({
      isShow: true,
      title:
        lang === "en"
          ? "Do you really want to leave?"
          : "Ви дійсно бажаєте вийти?",
      action: () => dispatch(logOut()),
    });
    document.querySelector("#modal").classList.add("js-action");
  };

  return (
    <>
      <StyledHeader>
        <LogoContainer>
          <Block />
          <LogoSvg>
            <use href={`${svg}#logo`}></use>
          </LogoSvg>
        </LogoContainer>
        <ControlsWrapper>
          <ThemeSwitcher />
          <LangSwitcher />
          {token && (
            <StyledContainer>
              <Img>
                <Avatar>
                  {user?.email && user.email.slice(0, 1).toUpperCase()}
                </Avatar>
              </Img>
              <Name>{user.email}</Name>
              <Line />
              <Exit type="button" onClick={handleExit}>
                {lang === "en" ? (
                  <ExitText>Exit</ExitText>
                ) : (
                  <ExitText>Вийти</ExitText>
                )}
                <ExitSvg>
                  <use href={`${svg}#logout`}></use>
                </ExitSvg>
              </Exit>
            </StyledContainer>
          )}
        </ControlsWrapper>
      </StyledHeader>
      {popup.isShow && <Popup popup={popup} setPopup={setPopup} />}
    </>
  );
}
