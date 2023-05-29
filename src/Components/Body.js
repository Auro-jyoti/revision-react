import { restrauntList } from "../Config";
import RestrauntCard from "./RestruantCard";

const Body = () => {
    return (
        <div className="restraunt-list">
            <RestrauntCard v={restrauntList[0]}/>
            <RestrauntCard v={restrauntList[1]}/>
            <RestrauntCard v={restrauntList[2]}/>
            <RestrauntCard v={restrauntList[3]}/>
            <RestrauntCard v={restrauntList[4]}/>
        </div>
    );
};

export default Body;