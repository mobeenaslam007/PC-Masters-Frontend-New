import React from "react";
import Header from "../../component/Common/Header";
import Banner from "../../component/Common/Banner";
import Layout from "../../component/MyAccountDashboard/Layout";
import Dashboard from "../../component/MyAccountDashboard/DashBoard";
import Footer from "../../component/Common/Footer";
import ErrorArea from "../../component/Error/";
import { useSelector } from "react-redux";
const MyAccounts = () => {
  let status = useSelector((state) => state.user.status);

  return (
    <>
      <Header />

      {status ? (
        <>
          <Layout>
            <Banner title="Customer Dashboard" />
            <Dashboard />
          </Layout>
        </>
      ) : (
        <ErrorArea />
      )}
      <Footer />
    </>
  );
};

export default MyAccounts;
