import { restrauntList } from "../Config";
import RestrauntCard from "./RestruantCard";

const Body = () => {
    return (
        <div className="restraunt-list">
            <RestrauntCard {...restrauntList[0].data}/>
            <RestrauntCard {...restrauntList[1].data} />
            <RestrauntCard {...restrauntList[2].data} />
            <RestrauntCard {...restrauntList[3].data} />
            <RestrauntCard {...restrauntList[4].data} />
        </div>
    );
};

export default Body;