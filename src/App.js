
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./components/SharedLayout/SharedLayout";
import "react-toastify/dist/ReactToastify.css";
import {AuthForm} from "./components/AuthForm/AuthForm";


// const AuthForm = lazy(() => import("./components/AuthForm/AuthForm"));



export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="auth/" element={<AuthForm />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
