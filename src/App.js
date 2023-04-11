import { lazy } from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Loader } from "./components/Loader/Loader";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = lazy(() => import("./components/AuthForm/AuthForm"));
export function App() {
  const selectedMode = useSelector(getMode);
  const themeMode = selectedMode.mode === "light" ? darkTheme : theme;

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          path="auth/"
          element={
            <Suspense fallback={<Loader />}>
              <AuthForm />
            </Suspense>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
