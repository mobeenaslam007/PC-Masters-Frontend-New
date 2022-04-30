import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getProducts",
  async (thunkAPI) => {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_API}/products/`
    ).then((data) => data.json());
    return res;
  }
);
