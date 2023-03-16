import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Loader } from "./components/Loader/Loader";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import AuthNav from "./components/AuthNav/AuthNav";
import NoticesCategoryList from "./components/NoticesCategoriesList/NoticesCategoriesList";

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
            <Route
              path="register"
              element={
                <Suspense fallback={<Loader />}>
                  <RegisterPage />
                </Suspense>
              }
            ></Route>
            <Route
              path="login"
              element={
                <Suspense fallback={<Loader />}>
                  <LoginPage />
                </Suspense>
              }
            ></Route>
          </Route>
          <Route
            path="user/"
            element={
              <Suspense fallback={<Loader />}>
                <UserPage />
              </Suspense>
            }
          >
            <Route
              path="news/"
              element={
                <Suspense fallback={<Loader />}>
                  <NewsPage />
                </Suspense>
              }
            ></Route>
            <Route
              path="notices/"
              element={
                <Suspense fallback={<Loader />}>
                  <NoticesPage />
                </Suspense>
              }
            >
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
