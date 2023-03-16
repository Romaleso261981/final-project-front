import { Outlet } from "react-router-dom";
import { HomeTitle } from "../../components/MainTitle/MainTitle";

export const UserPage = () => {
  return (
    <>
      <HomeTitle />
      <Outlet />
    </>
  );
};

export default UserPage;
