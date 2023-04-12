import { useSelector } from "react-redux";
import { useState } from "react";
import styled from "./UserMenu.module.scss";

const UserMenu = () => {
  const userName = useSelector((state) => state.user?.user?.email);
  const avatarName = userName?.slice(0, 1).toLocaleUpperCase();

  const [isModalActive, setIsModalActive] = useState(false);

  const toggleModal = () => {
    setIsModalActive(!isModalActive);
  };

  const handleOpenModal = () => {
    setIsModalActive(true);
  };
  return (
    <div className={styled.menu__wrap}>
      <p>{avatarName || "U"}</p>
      <p>{userName || "User Name"}</p>
      <button onClick={handleOpenModal} type="button">
        Exit
      </button>
      <button type="button" onClick={handleOpenModal}>
        Logout icon
      </button>
    </div>
  );
};
export default UserMenu;
