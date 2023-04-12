import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
// import { logIn, Register } from '../../redux/auth/operations';

import { NavLink } from "../NavLink/NavLink";
import { Btn } from "../Buttons/Btn";

import eyeOpened from "../../assets/icons/eye-open.svg";
import eyeClosed from "../../assets/icons/eye-blocked.svg";

import {
  Input,
  Label,
  BtnsWrapper,
  FormWrapper,
  InputWrapper,
  Form,
  InputsWrapper,
  Hint,
  HintLeft,
  ErrorText,
  GoogleLoginLink,
  PasswordBtn,
  PasswordIcon,
} from "./AuthForm.styled";
import { getLang } from "redux/lang/langSelectors";

export const AuthForm = ({
  formTitle,
  btnText,
  navLinkText,
  navLinkAdress,
  hintText,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lang = useSelector(getLang).lang;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleShowPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const onInputChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      setError(true);
      return null;
    }
    if (formTitle === "login") {
      dispatch(logIn({ email, password }));
    } else {
      dispatch(Register({ email, password }));
      navigate("/registri");
    }

    resetForm();
  };

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setError(false);
  };

  return (
    <FormWrapper>
      {formTitle === "login" && (
        <>
          {lang === "en" ? (
            <Hint>You can log in with your Google Account:</Hint>
          ) : (
            <Hint>Ви можете залогінитись через Google Account:</Hint>
          )}
          <GoogleLoginLink href="https://auth/google">
            <FcGoogle />
            Google
          </GoogleLoginLink>
        </>
      )}
      <Form onSubmit={handleSubmit}>
        <HintLeft>{hintText}</HintLeft>
        <InputsWrapper>
          <InputWrapper>
            <Label htmlFor="auth-email">
              {error && <ErrorText>*</ErrorText>}
              {lang === "en" ? (
                <span>Email</span>
              ) : (
                <span>Електронна скринька</span>
              )}
            </Label>
            <Input
              type="email"
              id="auth-email"
              name="email"
              value={email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="your@email.com"
              onChange={onInputChange}
              onInvalid={(e) => {
                setError(true);
              }}
            />
            {error && lang === "en" ? (
              <ErrorText>This is a required field</ErrorText>
            ) : (
              error && <ErrorText>Це обов'язкове поле</ErrorText>
            )}
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="auth-password">
              {error && <ErrorText>*</ErrorText>}
              {lang === "en" ? <span>Password</span> : <span>Пароль</span>}
            </Label>
            <Input
              type={isPasswordShown ? "text" : "password"}
              id="auth-password"
              name="password"
              value={password}
              minLength="8"
              placeholder={lang === "en" ? "Password" : "Пароль"}
              onChange={onInputChange}
              onInvalid={(e) => {
                setError(true);
              }}
            />
            <PasswordBtn onClick={handleShowPassword} type="button">
              <PasswordIcon
                src={isPasswordShown ? eyeOpened : eyeClosed}
                alt="Button show/hide password"
              />
            </PasswordBtn>
            {error && lang === "en" ? (
              <ErrorText>This is a required field</ErrorText>
            ) : (
              error && <ErrorText>Це обов'язкове поле</ErrorText>
            )}
          </InputWrapper>
        </InputsWrapper>
        <BtnsWrapper>
          <Btn type="submit" text={btnText} />
          <NavLink text={navLinkText} to={navLinkAdress} />
        </BtnsWrapper>
      </Form>
    </FormWrapper>
  );
};
