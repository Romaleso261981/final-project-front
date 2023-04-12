import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Background from "../../components/ImgBackground/Background";


export const SharedLayout = () => {
  return (
    <Background>
      <Header />
      <Outlet />
    </Background>
  );
};

export default SharedLayout;
