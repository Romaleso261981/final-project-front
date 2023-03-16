import { Button } from "./Header.styled";

export const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <ul>
        <li>
          <Button to="auth">auth</Button>
          <Button to="auth/register">register</Button>
          <Button to="auth/login">login</Button>
          <Button to="user">user</Button>
          <Button to="user/friends">friends</Button>
          <Button to="user/news">news</Button>
          <Button to="user/notices">notices</Button>
          <Button to="user/notices/sell">sell</Button>
          <Button to="user/notices/lost-found">lost-found</Button>
          <Button to="user/notices/for-free">for-free</Button>
        </li>
      </ul>
    </>
  );
};

export default Header;
