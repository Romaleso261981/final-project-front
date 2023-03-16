import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <>
      <h1>SharedLayout</h1>
      <Outlet />
    </>
  );
};

export default SharedLayout;
