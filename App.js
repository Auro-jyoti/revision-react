import React from "react";
import ReactDOM from "react-dom/client";
import Title from "./HeaderComponent";

const AppLayout = () => {
    return (
        <>
            <Title />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);