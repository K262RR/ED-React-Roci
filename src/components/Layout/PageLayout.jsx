import React from "react";
import PageHeader from "./Header/PageHeader";
import Footer from "./Footer/Footer";

export default function PageLayout({ children }) {
  return (
    <>
      <PageHeader />
      {children}
      <Footer />
    </>
  );
}
