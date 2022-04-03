// body component
const Body = () =>{
    return(
  <body>
   <div className = "promo-news-carousel">
   {/* need to make component for promoted news */}
    <div className="promo-news">Recent NEWS promoted #1</div>
    <div className="promo-news">Recent NEWS promoted #2</div>
    <div className="promo-news">Recent NEWS promoted #3</div>
    <div className="promo-news">Recent NEWS promoted #4</div>
    <div className="promo-news">Recent NEWS promoted #5</div>
    <div className="promo-news">Recent NEWS promoted #6</div>
    </div>
    <div className="news-content">
      <div className="news-content-lg">
        <div className = "latest-posts">
        <div>Item#1</div>
        <div>Item#2</div>
        <div>Item#3</div>
        <div>Item#4</div>
        </div>
        <div className = "news-in-picture">
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
        
      </div>
    <div className="news-content-sm">
      
    </div>
    </div>
  </body>
    )
  }

  export default Body;