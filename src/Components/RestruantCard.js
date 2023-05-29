import { linkId, tempImg, testImg } from "../../imgs/assets";

import { restrauntList } from "../Config";

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

// const burgerKing = {
//     name: "Burger King",
//     image: {tempImg},
//     cusines: ["Burger", "American"],
//     Address : "New Colony"
// };

const RestrauntCard = ({ restaurant }) => {
    // console.log(restaurant);
    return (
        <div className="Card">
            <img src={linkId + restaurant.data?.cloudinaryImageId}/>
            <h2>{restaurant.data?.name}</h2>
            <h3>{restaurant.data?.cuisines?.join(", ")}</h3>
            <h4>{restaurant.data?.area}</h4>
        </div>
    );
};

export default RestrauntCard;