import Header from "@/components/Header";
import React from "react";

const BaseScreen = ({ children, styles }) => {
  return (
    <>
      <Header />
      <div className={styles}>
        {children}
      </div>
    </>
  );
};

export default BaseScreen;
