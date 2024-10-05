import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { navItems } from "../constants/navItems";
import Footer from "../components/Footer";

const Layout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <main className="main">
      <Navbar
        name={"Kushagra Raj Tiwari"}
        navItems={navItems.filter((navItem) => navItem.active)}
      />
      <div id="content">
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </div>
      <Footer></Footer>
    </main>
  );
};

export default Layout;
