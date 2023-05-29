import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/HeaderComponent";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

const AppLayout = () => {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);