import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { getMode } from "./redux/theme/themeSelector";
import { ThemeProvider } from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { theme, darkTheme } from "./utils/theme";
import { ToastContainer } from "react-toastify";
import SharedLayout from "./components/SharedLayout/SharedLayout";
// import Container from "./components/Container/Container";
// import PublicRoutes from "./components/PublicRoutes/PublicRoutes";
// import PrivateRoute from "./components/PravateRoute/PrivateRoute";
import LoginPage from "./pages/LoginsPage/Logins";
import RegisterPage from "./pages/RegisterPage/Register";
import HomePage from "./pages/HomePage/HomePage";
import UserPage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFoundPage/NotFound";

export function App() {
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;

  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer autoClose={1500} pauseOnHover={false} limit={2} />
    </ThemeProvider>
  );
}

export default App;
