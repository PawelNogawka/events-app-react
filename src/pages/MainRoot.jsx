import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Loader from "../components/Loader";

import Header from "../components/Header";
import Footer from "../components/Footer";

const MainRoot = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading")
    return (
      <>
        <Header />
        <Loader />
      </>
    );

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainRoot;
