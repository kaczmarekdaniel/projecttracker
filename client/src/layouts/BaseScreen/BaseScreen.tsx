import Header from "@/components/Header";
import React from "react";

const BaseScreen = ({children}) => {
    return (
        <>
            <Header />
            <main>{children}</main>
        </>
    );
};

export default BaseScreen;
