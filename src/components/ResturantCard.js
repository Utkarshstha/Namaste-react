import {CDN_URL} from "../utils/constantlink";
import { IMG_URL } from "../utils/constantlink";
const ResturantCard=(props)=>{
    const{resObj}=props;
  const {name,cuisines,avgRating,cloudinaryImageId}=resObj?.info
   
    return(
      <div className="res-card">
            
             <img className="res-logo" src={IMG_URL+cloudinaryImageId}/> 
           
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
             {/* <h4>{resObj.name}</h4>
            <h4>{resObj.cuisine}</h4>
            <h4>{resObj.rating}</h4> */}
      
           {/* <h3>{resObj.restaurants.info.name}</h3> */}
           {/* <h4>{resObj.restaurants.info.cuisines.join(", ")}</h4> */}
           {/* <h4>{resObj.data.slastring}</h4>             */}
           {/* <h4>{resObj.restaurants.info.avgRating}</h4>             */}
             </div>
    )
}

export default ResturantCard;