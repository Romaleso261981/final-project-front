import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    lang: "ua",
  },
  reducers: {
    setLanguage: (_, { payload }) => ({
      lang: payload,
    }),
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
