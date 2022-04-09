import PromoNews from "./PromoNews/PromoNews";
import с from './PromoNCarousel.module.css'

const PromoNewsCarousel = function(){
    return(
        <div className={с.promoCarousel}>
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