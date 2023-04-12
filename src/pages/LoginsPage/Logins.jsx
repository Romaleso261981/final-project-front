import { Container, ContentWrapper, ImgBgWrapper } from "./Logins.styled";

import { AuthForm } from '../../components/AuthForm/AuthForm';
import { AuthPageLogo } from '../../components/AuthPageLogo/AuthPageLogo';

import { getLang } from '../../redux/lang/langSelectors';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const lang = useSelector(getLang).lang;

  return (
    <Container>
        <ContentWrapper>
          <AuthForm
            formTitle="login"
            btnText={lang === "en" ? "Log in" : "Логін"}
            navLinkText={lang === "en" ? "Register" : "Реєстрація"}
            navLinkAdress="/register"
            hintText={
              lang === "en"
                ? "Or log in using an email and password, after registering:"
                : "Або залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:"
            }
          />
        </ContentWrapper>
    </Container>
  );
};

export default LoginPage;
