import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <ul>
        <li>
          <Link to="auth">auth</Link>
          <Link to="auth/register">register</Link>
          <Link to="auth/login">login</Link>
          <Link to="user">user</Link>
          <Link to="friends">friends</Link>
          <Link to="user/news"></Link>
          <Link to="user/notices">notices</Link>
          <Link to="user/notices/sell">sell</Link>
          <Link to="user/notices/lost-found">lost-found</Link>
          <Link to="user/notices/for-free">for-free</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
