import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { getMode } from "./redux/theme/themeSelector";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const LoginPage = lazy(() => import("./pages/LoginsPage/Logins"));
const NewsPage = lazy(() => import("./pages/LoginsPage/Logins"));
const NoticesPage = lazy(() => import("./pages/LoginsPage/Logins"));
const OurFriendsPage = lazy(() => import("./pages/LoginsPage/Logins"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/Register"));
const SharedLayout = lazy(() => import("./components/Layout/Layout"));
const UserPage = lazy(() => import("./pages/WalletPage/Wallet"));

export function App() {
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;

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
