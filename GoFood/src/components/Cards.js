import {CDN_URL} from "../utils/constants"
const Cards=(props)=>{
    const {name,cloudinaryImageId,locality,cuisines,avgRating}=props.resData.info
    const{deliveryTime}=props.resData.info.sla
    return (  
        <div data-testid="food-card" className="food-card">
                   <img 
                className="food-image" 
                src={CDN_URL+cloudinaryImageId}
                alt={name} 
            />
        <div className="food-card-details">
            <h3 className="restaurant-name">{name}</h3>
            <div className="food-card-info">
                <div className="food-rating-time">
                    <span className="food-rating">⭐ {avgRating}</span>
                    <span className="delivery-time">{deliveryTime} Mins</span>
                </div>
                <p className="food-cuisines">{cuisines.join(",")}</p>
                <p className="food-location">{locality}</p>
            </div>
        </div>
    </div>
    )
}
export default Cards