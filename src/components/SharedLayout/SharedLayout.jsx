import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { LoginPage } from "../../pages/LoginsPage/Logins";
import Background from "../../components/ImgBackground/Background";

export const SharedLayout = () => {
  return (
    <Background>
      <Header />
      <LoginPage />
      <Outlet />
    </Background>
  );
};

export default SharedLayout;
