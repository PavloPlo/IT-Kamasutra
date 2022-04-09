import NewsContent from "./NewsContent/NewsContent";
import PromoNewsCarousel from "./PromoNCarousel/PromoNCarousel";
import './Body.css'

// body component
const Body = () => {
  return (
    <body>
      <PromoNewsCarousel/>
      <NewsContent/>
    </body> 
  )
}

export default Body;