import { Outlet } from "react-router-dom";

export const UserPage = () => {
  return (
    <>
      <h1>UserPage</h1>
      <Outlet />
    </>
  );
};

export default UserPage;
