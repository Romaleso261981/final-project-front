import { lazy, Suspense, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import { authToken } from "./API";

import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { refreshUser } from "./redux/auth/operations";
import { getMode } from "./redux/theme/themeSelector";
import { selectAccessToken } from "./redux/auth/selectors";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const LoginPage = lazy(() => import("./pages/LoginsPage/Logins"));
const NewsPage = lazy(() => import("./pages/LoginsPage/Logins"));
const NoticesPage = lazy(() => import("./pages/LoginsPage/Logins"));
const OurFriendsPage = lazy(() => import("./pages/LoginsPage/Logins"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/Register"));
const SharedLayout = lazy(() => import("./components/Layout/Layout"));
const UserPage = lazy(() => import("./pages/WalletPage/Wallet"));

const PrivateRoute = ({ children, token }) => {
  return token ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children, token }) => {
  return !token ? children : <Navigate to="/NewsPage" />;
};

export function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);
  // const token = null;
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;

  useEffect(() => {
    if (!token) {
      setIsHintShown(false);
      return;
    }
    dispatch(refreshUser());
    // eslint-disable-next-line
  }, [dispatch]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // useEffect(() => {
  //   const accessToken = searchParams.get("accessToken");
  //   const refreshToken = searchParams.get("refreshToken");
  //   const sid = searchParams.get("sid");
  //   if (!accessToken) return;
  //   dispatch(googleAuthUser({ accessToken, refreshToken, sid }));
  //   navigate("/wallet");
  // }, [searchParams, dispatch, navigate]);

  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="news/" element={<NewsPage />}></Route>
          <Route path="notices/" element={<NoticesPage />}></Route>
          <Route path="friends/" element={<OurFriendsPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
