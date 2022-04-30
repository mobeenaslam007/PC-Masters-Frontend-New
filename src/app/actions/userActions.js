import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk("user/register", async (data) => {
  console.log(data);
  const api_data = {
    name: data.user,
    email: data.email,
    password: data.pass,
  };
  const res = await fetch(
    `${process.env.REACT_APP_SERVER_API}/users/register/`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(api_data),
    }
  ).then((data) => data.json());
  console.log(res);
  return res;
});

export const loginUser = createAsyncThunk("user/login", async (data) => {
  console.log(data)
  const api_data = {
    username: data.email,
    password: data.password,
  };
  const res = await fetch(`${process.env.REACT_APP_SERVER_API}/users/login/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(api_data),
  }).then((data) => data.json());
  console.log(res);
  return res;
});
