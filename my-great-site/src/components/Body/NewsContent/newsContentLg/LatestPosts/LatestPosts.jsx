import c from "./LatestPosts.module.css"
import LpItem from "./LpItem";
const LatestPosts = function(){
    return(
        <div className={c.latestPosts}>
            <LpItem/>
            <LpItem/>
            <LpItem/>
            <LpItem/>
        </div>
    )
}
export default LatestPosts;