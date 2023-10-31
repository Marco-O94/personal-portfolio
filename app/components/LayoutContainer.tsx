import Navbar from "./Navbar";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import MainMenu from "./MainMenu";

const LayoutContainer = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <MainMenu>
        <Navbar />
        {children}
        <Footer />
      </MainMenu>
    </main>
  );
};

export default LayoutContainer;
