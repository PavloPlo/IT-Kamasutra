import NewsContentLg from "./newsContentLg/newsContentLg";
import NewsContentSm from "./NewsContentSm/NewsContentSm";

const NewsContent = function(){
    return(
        <div className="newsContent">
        <NewsContentLg/>
        <NewsContentSm/>
      </div>
    )
}
export default NewsContent;
