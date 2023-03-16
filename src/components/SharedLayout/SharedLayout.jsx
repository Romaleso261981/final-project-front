import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

export const SharedLayout = () => {
  return (
    <>
      <h1>SharedLayout</h1>
      <Header  />
      <Outlet />
    </>
  );
};

export default SharedLayout;
