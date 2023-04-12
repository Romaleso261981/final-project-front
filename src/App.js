import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { getMode } from "./redux/theme/themeSelector";
import { theme, darkTheme } from "./utils/theme";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginsPage/Logins";
import RegisterPage from "./pages/RegisterPage/Register";



export function App() {
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;

  return (
    <ThemeProvider theme={themeMode}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="login/" element={<LoginPage />}></Route>
          <Route path="register/" element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
