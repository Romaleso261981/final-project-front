import { API } from "../../API";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchFlowersByCategory = createAsyncThunk(
  "Flowers/fetchByCategory",
  async (category, thunkAPI) => {
    const url = `/Flowers/category/${category}`;
    try {
      const result = await API.get(url);
      console.log(result);
      return result.data.data.userWithPet;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFlowersByTitle = createAsyncThunk(
  "Flowers/fetchByTitle",
  async (title, thunkAPI) => {
    const url = `/Flowers/title/${title}`;
    try {
      const result = await API.get(url);
      if (!result.data.data.length) {
        showToastInfo("Sorry, no pets by this title");
      }
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFlowersByOwner = createAsyncThunk(
  "Flowers/fetchByOwner",
  async (_, thunkAPI) => {
    const url = `/Flowers/userFlowers`;
    try {
      const result = await API.get(url);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const onAddFlower = createAsyncThunk(
  "Flowers/addFlower",
  async (id, thunkAPI) => {
      try {
        console.log(id);
      //   const response = await API.post("/Flowers/create", newNotice);
      //   return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteNotice = createAsyncThunk(
  "Flowers/deleteNotice",
  async (noticeId, thunkAPI) => {
    try {
      const response = await API.delete(`/Flowers/delete/${noticeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavoriteFlowers = createAsyncThunk(
  "Flowers/fetchFavorite",
  async (_, thunkAPI) => {
    const url = `/Flowers/getFavorite`;
    try {
      const result = await API.get(url);
      return result.data.data[0].userLikePets;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  "Flowers/addFavorite",
  async (noticeId, thunkAPI) => {
    const url = `/Flowers/addFavorite/${noticeId}`;
    try {
      const result = await API.patch(url);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  "Flowers/deleteFavorite",
  async (noticeId, thunkAPI) => {
    const url = `/Flowers/delFavorite/${noticeId}`;
    try {
      const result = await API.patch(url);
      return result.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
