import React from "react";
import HomeHeader from "../Headers/HomeHeader";

export default function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      {children}
    </>
  );
}
