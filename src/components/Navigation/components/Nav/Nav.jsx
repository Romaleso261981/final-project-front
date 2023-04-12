import { NavList, NavGeneralLink } from "./Nav.styled";

export const Nav = () => {
  return (
    <NavList>
      <li>
        <NavGeneralLink to="/">Розпродажа</NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/login">Login</NavGeneralLink>
      </li>
      <li>
        <NavGeneralLink to="/register">Registration</NavGeneralLink>
      </li>
    </NavList>
  );
};
