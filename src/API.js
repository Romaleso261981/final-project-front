import axios from "axios";

const API = axios.create({
  baseURL: "https://back.kapusta.click",
});

const authToken = {
  set(token) {
    API.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    API.defaults.headers.common.Authorization = "";
  },
};

// reports*****************************
const getPeriodTransactions = async (date) => {
  return await API.get(`api/finances/reports?${date} `);
};

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status == 401) {
      console.log("==================================================read localStorage");
      const refreshToken = localStorage.getItem("refreshToken");
      console.log(refreshToken);
      try {
        const { data } = await API.post("/auth/users/refresh", { refreshToken });
        if (accessToken) {
          console.log("interceptors", accessToken);
          authToken.set(data.accessToken);
          localStorage.setItem("refreshToken", data.refreshToken);
        }
        console.log(accessToken);
        return API(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export { API, authToken, getPeriodTransactions };
