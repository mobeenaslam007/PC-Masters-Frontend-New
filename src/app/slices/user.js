import { createSlice } from "@reduxjs/toolkit";
import { registerUser, loginUser } from "../actions/userActions";

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    status: false,
    user: {},
  },
  reducers: {
    // Login
    // login: (state) => {
    //   state.status = true;
    //   state.user = {
    //     name: "Jhon Doe",
    //     role: "customer",
    //     email: "jhondoe@gmail.com",
    //     pass: "jhondoe123",
    //   };
    // },
    // Register
    // register: (state, action) => {
    //     let { user, email, pass } = action.payload;
    //     state.status = true
    //     state.user = {
    //         name: user,
    //         role: 'customer',
    //         email: email,
    //         pass: pass
    //     }
    // },
    // Logout
    logout: (state) => {
      state.status = false;
      state.user = {};
    },

    //register
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
    },
    [registerUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = true;

      state.user = {
        name: action.payload.name,
        role: "customer",
        email: action.payload.email,
        token: action.payload.token,
      };
    },
    [registerUser.rejected]: (state) => {
      state.loading = false;
    },

    // Login
    [loginUser.pending]: (state) => {
      state.loading = true;
    },

    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.status = true;
      state.user = {
        name: action.payload.name,
        role: "customer",
        email: action.payload.email,
        token: action.payload.token,
        refresh: action.payload.refresh,
      };
    },

    [loginUser.rejected]: (state) => {
      state.loading = false;
    },
  },
});

const userReducer = userSlice.reducer;
export default userReducer;
