import { Outlet } from "react-router-dom";
// import { Header } from "../Header/Header";
import { Header } from "../OnlineShop/Header";
import { categories } from "../OnlineShop/Categories";
console.log(categories);



export const SharedLayout = ({ categories }) => {
  return (
    <>
      <Header categories={categories} />
      <Outlet />
    </>
  );
};

export default SharedLayout;
