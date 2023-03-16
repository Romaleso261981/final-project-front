import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { ImgWrapp } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <h1>SharedLayout</h1>
      <ImgWrapp></ImgWrapp>
      <Header />
      <Outlet />
    </>
  );
};

export default SharedLayout;
