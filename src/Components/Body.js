import { restrauntList } from "../Config";
import RestrauntCard from "./RestruantCard";

const Body = () => {
    return (
        <div className="restraunt-list">
            <RestrauntCard cloudinaryImageId={restrauntList[0].data.cloudinaryImageId} name={restrauntList[0].data.name}  cuisines={restrauntList[0].data.cuisines} address={restrauntList[0].data.address}/>
            <RestrauntCard cloudinaryImageId={restrauntList[1].data.cloudinaryImageId} name={restrauntList[1].data.name}  cuisines={restrauntList[1].data.cuisines} address={restrauntList[1].data.address} />
            <RestrauntCard cloudinaryImageId={restrauntList[2].data.cloudinaryImageId} name={restrauntList[2].data.name}  cuisines={restrauntList[2].data.cuisines} address={restrauntList[2].data.address} />
            <RestrauntCard cloudinaryImageId={restrauntList[3].data.cloudinaryImageId} name={restrauntList[3].data.name}  cuisines={restrauntList[3].data.cuisines} address={restrauntList[3].data.address} />
            <RestrauntCard cloudinaryImageId={restrauntList[4].data.cloudinaryImageId} name={restrauntList[4].data.name}  cuisines={restrauntList[4].data.cuisines} address={restrauntList[4].data.address} />
        </div>
    );
};

export default Body;