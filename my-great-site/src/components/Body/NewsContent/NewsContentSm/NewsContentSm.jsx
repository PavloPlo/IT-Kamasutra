import c from "./NewsContentSm.module.css"

const NewsContentSm = function (){
    return(
        <div className={c.newsContentSm}>
          <div className={c.smL}>
            <h2 className="newsSectionTitle">Popular posts</h2>
            <div>
              <div>Post#1</div>
              <div>Post#2</div>
              <div>Post#3</div>
              <div>Post#4</div>
            </div>
            <h2 className="newsSectionTitle">Poll</h2>
            <div>
            </div>
            <h2 className="newsSectionTitle">Slider posts</h2>
            <div>
              Item#1
            </div>
            <h2 className="newsSectionTitle">Tags</h2>
            <div>
              <div>Item1</div>
            </div>
          </div>
          <div className={c.smR}>
            <div>sponsores block</div>
          </div>
        </div>
    )
}
export default NewsContentSm;