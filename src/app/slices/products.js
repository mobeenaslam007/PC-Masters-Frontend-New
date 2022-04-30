import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
import { getAllProducts } from "../actions/productActions";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    carts: [],
    favorites: [],
    compare: [],
    single: [],
  },

  reducers: {
    // Get Single Product
    getProductById: (state, action) => {
      let { id } = action.payload;
      let arr = state.products.find((item) => item.id === parseInt(id));
      state.single = arr;
    },
    // Add to Cart
    addToCart: (state, action) => {
      let { id } = action.payload;

      // Check existance
      let item = state.carts?.find((i) => i.id === parseInt(id));
      if (item === undefined) {
        // Get Product
        let arr = state.products.find((item) => item.id === parseInt(id));
        arr.quantity = 1;
        state.carts?.push(arr);
        Swal.fire({
          title: "Success!",
          text: "Successfully added to your Cart",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "This product is already added in your Cart",
          imageUrl: item.img,
          imageWidth: 200,
          imageAlt: item.title,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    },
    // Add to Compare
    addToComp: (state, action) => {
      if (state.compare?.length >= 3) {
        Swal.fire({
          title: "Failed!",
          text: "Compare List is Full",
          icon: "warning",
          showConfirmButton: false,
          timer: 2500,
        });
        return;
      }

      let { id } = action.payload;

      // Check existance
      let item = state.compare?.find((i) => i.id === parseInt(id));
      if (item === undefined) {
        // Get Product
        let arr = state.products.find((item) => item.id === parseInt(id));
        state.compare?.push(arr);
        Swal.fire({
          title: "Success!",
          text: "Successfully added to Compare List",
          icon: "success",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Already Added in Compare List",
          imageUrl: item.img,
          imageWidth: 200,
          imageAlt: item.title,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    },
    // Update Cart
    updateCart: (state, action) => {
      let { val, id } = action.payload;
      state.carts?.forEach((item) => {
        if (item.id === parseInt(id)) {
          item.quantity = val;
        }
      });
    },
    // Remove Cart
    removeCart: (state, action) => {
      let { id } = action.payload;
      let arr = state.carts?.filter((item) => item.id !== parseInt(id));
      state.carts = arr;
    },
    // Delete from Compare
    delCompare: (state, action) => {
      let { id } = action.payload;
      let arr = state.compare?.filter((item) => item.id !== parseInt(id));
      state.compare = arr;
    },
    // Clear Cart
    clearCart: (state) => {
      state.carts = [];
    },
    // Add to Favorite / Wishlist
    addToFav: (state, action) => {
      let { id } = action.payload;

      // Check existance
      let item = state.favorites?.find((i) => i.id === parseInt(id));
      if (item === undefined) {
        // Get Product
        let arr = state.products.find((item) => item.id === parseInt(id));
        arr.quantity = 1;
        state.favorites?.push(arr);
        Swal.fire("Success", "Added to Wishlist", "success");
      } else {
        Swal.fire("Failed", "Already Added in Wishlist", "warning");
      }
    },
    // Remove from Favorite / Wishlist
    removeFav: (state, action) => {
      let { id } = action.payload;
      let arr = state.favorites?.filter((item) => item.id !== id);
      state.favorites = arr;
    },
  },

  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.loading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = payload;
      state.carts = payload.slice(4, 7);
      state.favorites = payload.slice(8, 12);
      state.compare = state.compare.length > 0 ? state.compare : [];

      state.single = null;
    },
    [getAllProducts.rejected]: (state) => {
      state.loading = false;
    },
  },  
});

const productsReducer = productsSlice.reducer;
export default productsReducer;
