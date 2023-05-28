import {logo} from "../../imgs/assets";
import { useState } from "react";

import RestrauntCard from "./RestrauntCard";

const Title = () => (
    <a href ="/">
        <img 
            className="logo" alt="logo" src={logo}
        />
    </a>
);

const HeaderComponent = () => {
    const [title, setTitle] = useState("Food Villa");
    return (
        <>
            <div className = "header">
                <Title />
                <h1>{title}</h1>

                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HeaderComponent;