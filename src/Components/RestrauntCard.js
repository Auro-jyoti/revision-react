import { testImg } from "../../imgs/assets";

const RestrauntCard = ({name, cuisines, lastMileTravelString, cloudinaryImgId}) => {
    return (
        <div className = "card">
            <img src={testImg + cloudinaryImgId} />
            <h2>{name}</h2>
            <h3>{cuisines?.join(",")}</h3>
            <h4>{lastMileTravelString}</h4>
        </div>
    );
};

export default RestrauntCard;