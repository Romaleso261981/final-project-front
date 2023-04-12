import { lazy, Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { Loader } from "./components/Loader/Loader";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import "react-toastify/dist/ReactToastify.css";

const AuthForm = lazy(() => import("./components/AuthForm/AuthForm"));
export function App() {
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
