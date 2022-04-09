import AdsSmall from "../../AdsSmall/AdsSmall";


const NewsContent = function(){
    return(
        <div className="news-content">
        <div className="news-content-lg">
          <h2 className="news-section-title">Latest posts</h2>
          <div className="latest-posts">
            <div>Item#1</div>
            <div>Item#2</div>
            <div>Item#3</div>
            <div>Item#4</div>
          </div>
          <h2 className="news-section-title">News in picture</h2>
          <div className="news-in-picture" >
            <div>Item#1</div>
            <div>Item#2</div>
            <div>Item#3</div>
            <div>Item#4</div>
            <div>Item#5</div>
            <div>Item#6</div>
            <div>Item#7</div>
            <div>Item#8</div>
            <div>Item#9</div>
            <div>Item#10</div>
          </div>
          <h2 className="news-section-title">Carousel posts</h2>
          <div className="carousel-posts">
            <p>Item#1</p>
            <p>Item#2</p>
            <p>Item#3</p>
          </div>
          <h2 className="news-section-title">Entertaiment</h2>
          <div className="entertaiment">
            <div>Item#1</div>
            <div>Item#2</div>
            <div>Item#3</div>
            <div>Item#4</div>
            <div>Item#5</div>
        </div>
        <AdsSmall/>
        </div>
        <div className="news-content-sm">
          <div className="sm-l">
            <h2 className="news-section-title">Popular posts</h2>
            <div>
              <div>Post#1</div>
              <div>Post#2</div>
              <div>Post#3</div>
              <div>Post#4</div>
            </div>
            <h2 className="news-section-title">Poll</h2>
            <div>
            </div>
            <h2 className="news-section-title">Slider posts</h2>
            <div>
              Item#1
            </div>
            <h2 className="news-section-title tags">Tags</h2>
            <div>
              <div>Item1</div>
            </div>
          </div>
          <div className="sm-r">
            <div>sponsores block</div>
          </div>
        </div>
      </div>
    )
}
export default NewsContent;
