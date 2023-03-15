import { lazy, Suspense, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Route,
  Routes,
  Navigate,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

import { authToken } from "./API";

import { theme, darkTheme } from "./utils/theme";
import { ThemeProvider } from "styled-components";
import { refreshUser } from "./redux/auth/operations";
import { getMode } from "./redux/theme/themeSelector";
import { selectAccessToken } from "./redux/auth/selectors";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const LoginPage = lazy(() => import("./pages/LoginsPage/Logins"));
const Register = lazy(() => import("./pages/RegisterPage/Register"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Wallet = lazy(() => import("./pages/WalletPage/Wallet"));
const ReportsPage = lazy(() => import("./pages/ReportsPage/ReportsPage"));

const PrivateRoute = ({ children, token }) => {
  return token ? children : <Navigate to="/" />;
};

const PublicRoute = ({ children, token }) => {
  return !token ? children : <Navigate to="/wallet" />;
};

export function App() {
  const dispatch = useDispatch();
  const [isHintShown, setIsHintShown] = useState(false);
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

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    const sid = searchParams.get("sid");
    if (!accessToken) return;
    dispatch(googleAuthUser({ accessToken, refreshToken, sid }));
    navigate("/wallet");
  }, [searchParams, dispatch, navigate]);

  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <PublicRoute token={token}>
                  <LoginPage />
                </PublicRoute>
              </Suspense>
            }
          />
           <Route
            path="/register"
            element={
              <PublicRoute token={token}>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/wallet"
            element={
              <Suspense fallback={<Loader />}>
                <PrivateRoute token={token}>
                  <Wallet
                    setIsHintShown={setIsHintShown}
                    isHintShown={isHintShown}
                  />
                </PrivateRoute>
              </Suspense>
            }
          />
          <Route
            path="/reports"
            element={
              <PrivateRoute token={token}>
                <ReportsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<h1>Невірно прописаний шлях</h1>} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
