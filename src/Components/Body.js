import { restrauntList } from "../Config";
import RestrauntCard from "./RestruantCard";

const Body = () => {
    return (
        <div className="restraunt-list">
            <RestrauntCard restaurant={restrauntList[0]}/>
            <RestrauntCard restaurant={restrauntList[1]}/>
            <RestrauntCard restaurant={restrauntList[2]}/>
            <RestrauntCard restaurant={restrauntList[3]}/>
            <RestrauntCard restaurant={restrauntList[4]}/>
        </div>
    );
};

export default Body;