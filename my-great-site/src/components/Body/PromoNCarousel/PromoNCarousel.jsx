import PromoNews from "./PromoNews/PromoNews";
import c from './PromoNCarousel.module.css'

const PromoNewsCarousel = function(){
    return(
        <div className={c.promoCarousel}>
       <PromoNews/>
       <PromoNews/>
       <PromoNews/>
       <PromoNews/>
       <PromoNews/>
       <PromoNews/>
       </div>
    )
}
export default PromoNewsCarousel;