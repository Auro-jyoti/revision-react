import { restrauntList } from "../Config";
import RestrauntCard from "./RestruantCard";

const Body = () => {
    return (
        <div className="restraunt-list">{
                restrauntList.map((restraunt) => {
                    return <RestrauntCard {...restraunt.data}/>;
                })
            }
        </div>
    );
};

export default Body;