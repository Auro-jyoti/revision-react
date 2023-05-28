import { tempImg, testImg } from "../../imgs/assets";

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



const RestrauntCard = () => {
    return (
        <div className="Card">
            <img src={tempImg} />
            <h2>Burger King</h2>
            <h3>Burgers, American</h3>
            <h4>Address</h4>
        </div>
    );
};

export default RestrauntCard;