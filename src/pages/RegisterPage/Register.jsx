import { Container, ContentWrapper } from './Register.styled';

import { AuthForm } from '../../components/AuthForm/AuthForm';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/lang/langSelectors';

const RegisterPage = () => {
  const lang = useSelector(getLang).lang;
  return (
    <Container>
      <ContentWrapper>
        <AuthForm
          formTitle="register"
          btnText={lang === 'en' ? 'Register' : 'Реєстрація'}
          navLinkText={lang === 'en' ? 'Log in' : 'Логін'}
          navLinkAdress="/"
          hintText={
            lang === 'en'
              ? 'You can log in using an email and password, after registering:'
              : 'Залогіньтесь, використовуючи ваш емейл та пароль, після реєстрації:'
          }
        />
      </ContentWrapper>
    </Container>
  );
};

export default RegisterPage;
