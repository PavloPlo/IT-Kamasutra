

import LatestPosts from './LatestPosts/LatestPosts';
import c from './newsContentLg.module.css'
import NewsInPicture from './NewsInPicture/NewsInPicture';

const NewsContentLg = function(){
    return(
        <div className={c.newsContentLg}>
          <h2 className="newsSectionTitle">Latest posts</h2>
          <LatestPosts/>
          <h2 className="newsSectionTitle">News in picture</h2>
          <NewsInPicture/>
          <h2 className="newsSectionTitle">Carousel posts</h2>
          
          <h2 className="newsSectionTitle">Entertaiment</h2>
          <div className="entertaiment">
            <div>Item#1</div>
            <div>Item#2</div>
            <div>Item#3</div>
            <div>Item#4</div>
            <div>Item#5</div>
        </div>
        
        </div>
    )
}
export default NewsContentLg;