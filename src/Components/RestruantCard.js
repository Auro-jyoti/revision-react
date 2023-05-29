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

const RestrauntCard = (props) => {
    console.log(props);
    return (
        <div className="Card">
            <img src={linkId + props.v.data?.cloudinaryImageId}/>
            <h2>{props.v.data?.name}</h2>
            <h3>{props.v.data?.cuisines?.join(", ")}</h3>
            <h4>{props.v.data?.area}</h4>
        </div>
    );
};

export default RestrauntCard;