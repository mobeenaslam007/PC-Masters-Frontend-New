import React, { useEffect } from "react";
import Banner from "../component/Home/Banner";
import BannerBottom from "../component/Home/BannerBottom";
import Footer from "../component/Common/Footer";
import { useSelector, useDispatch } from "react-redux";

import Header from "../component/Common/Header";

import { getAllProducts } from "../app/actions/productActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <>
      <Header />
      <Banner />
      <BannerBottom />

      <Footer />
    </>
  );
};

export default Home;
