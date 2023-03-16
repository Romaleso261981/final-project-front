import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { SharedLayout } from "./components/SharedLayout/SharedLayout";

import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { getMode } from "./redux/theme/themeSelector";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage/NoticesPage"));
const OurFriendsPage = lazy(() =>
  import("./pages/OurFriendsPage/OurFriendsPage")
);
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const UserPage = lazy(() => import("./pages/UserPage/UserPage"));

export function App() {
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;

  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="auth/" element={<AuthNav />}>
            <Route path="register" element={<RegisterPage />}></Route>
            <Route path="login" element={<LoginPage />}></Route>
          </Route>
          <Route path="user/" element={<UserPage />}>
            <Route path="news/" element={<NewsPage />}></Route>
            <Route path="notices/" element={<NoticesPage />}>
              <Route path="sell" element={<NoticesCategoryList />}></Route>
              <Route
                path="lost-found"
                element={<NoticesCategoryList />}
              ></Route>
              <Route path="for-free" element={<NoticesCategoryList />}></Route>
            </Route>
            <Route path="friends/" element={<OurFriendsPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
