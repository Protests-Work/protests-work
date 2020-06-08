import React from "react";
import Navbar from "../navbar/navbar";
// import Footer from "../footer/footer";
import SEO from '../seo/seo';

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
