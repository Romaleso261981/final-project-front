import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "./UserMenu.module.scss";

const UserMenu = () => {
  const userName = useSelector((state) => state.user?.user?.email);
  const avatarName = userName?.slice(0, 1).toLocaleUpperCase();

  const [isModalActive, setIsModalActive] = useState(false);

  // const toggleModal = () => {
  //   setIsModalActive(!isModalActive);
  // };

  // const handleOpenModal = () => {
  //   setIsModalActive(true);
  // };
  return (
    <div className={styled.menu__wrap}>
      <a type="button">login</a>
      <a type="button">registration</a>
    </div>
  );
};
export default UserMenu;
