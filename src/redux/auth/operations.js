import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import { toast } from "react-toastify";
import { notifySettings } from "../../utils/notifySettings";

import { API, authToken } from "../../API";

const Register = createAsyncThunk("auth/register", async (credentials) => {
  try {
    const { data } = await API.post("/auth/users/signup", credentials);
    console.log(data);
    return data;
  } catch (error) {
    toast.error("Server error, please try again later");
  }
});

const logIn = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
  try {
    const { data } = await API.post("/auth/users/login", userData);
    authToken.set(data.accessToken);
    const state = thunkAPI.getState();
    localStorage.setItem("refreshToken", data.refreshToken);
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.success(
          `Welcome back, ${data.user.email}!`,
          notifySettings
        )
      : Notiflix.Notify.success(
          `Радо вітаємо, ${data.user.email}!`,
          notifySettings
        );
    return data;
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure("Щось пішло не так...", notifySettings);
    return thunkAPI.rejectWithValue(error.request.status);
  }
});

const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const state = thunkAPI.getState();
    await API.get("/auth/users/logout");
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.info(
          "Stay safe and see you again &#9996;",
          notifySettings
        )
      : Notiflix.Notify.info(
          "Бережіть себе і до зустрічі &#9996;",
          notifySettings
        );
  } catch (error) {
    const state = thunkAPI.getState();
    const { lang } = state.language.lang;
    lang === "en"
      ? Notiflix.Notify.failure(`${error.message}`, notifySettings)
      : Notiflix.Notify.failure("Щось пішло не так...", notifySettings);
    return thunkAPI.rejectWithValue(error);
  }
});

const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { token } = state.auth;
      setToken(token);
      const { data } = await API.get("/users/current");
      return data;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      const state = getState();
      const { lang } = state.language.lang;
      lang === "en"
        ? Notiflix.Notify.failure("Please login again!", notifySettings)
        : Notiflix.Notify.failure(
            "Будь ласка, залогіньтесь знову!",
            notifySettings
          );
      return rejectWithValue(error);
    }
  }
);

const googleAuth = createAsyncThunk(
  "auth/googleAuth",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/google", credentials);
      authToken.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { Register, logIn, logOut, refreshUser, googleAuth };
