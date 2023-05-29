import { tempImg, testImg } from "./assets";

import { restrauntList } from "../src/Config";

// const RestrauntCard = ({name, cuisines, lastMileTravelString, cloudinaryImgId}) => {
//     return (
//         <div className = "card">
//             <img src={testImg + cloudinaryImgId} />
//             <h2>{name}</h2>
//             <h3>{cuisines?.join(",")}</h3>
//             <h4>{lastMileTravelString}</h4>
//         </div>
//     );
// };

const burgerKing = {
    name: "Burger King",
    image: {tempImg},
    cusines: ["Burger", "American"],
    Address : "New Colony"
};

const RestrauntCard = () => {
    return (
        <div className="Card">
            <img src={tempImg} />
            <h2>{burgerKing.name}</h2>
            <h3>{burgerKing.cusines?.join(", ")}</h3>
            <h4>{burgerKing.Address}</h4>
        </div>
    );
};

export default RestrauntCard;