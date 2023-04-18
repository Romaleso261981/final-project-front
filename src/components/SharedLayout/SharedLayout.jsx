import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import Footer from "../OnlineShop/Footer";
// import { Header } from "../OnlineShop/Header";
import { categories } from "../../pages/HomePage/HomePage";

export const SharedLayout = ({ categories }) => {
  return (
    <>
      <Header categories={categories} />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
