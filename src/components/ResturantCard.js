import {CDN_URL} from "../utils/constantlink";

const ResturantCard=(props)=>{
    const{resObj}=props;
   
    return(
      <div className="res-card">
            
             <img className="res-logo" src={resObj.image}/> 
            <h4>{resObj.name}</h4>
            <h4>{resObj.cuisine}</h4>
            <h4>{resObj.rating}</h4>
      
           {/* <h3>{resObj.restaurants.info.name}</h3> */}
           {/* <h4>{resObj.restaurants.info.cuisines.join(", ")}</h4> */}
           {/* <h4>{resObj.data.slastring}</h4>             */}
           {/* <h4>{resObj.restaurants.info.avgRating}</h4>             */}
             </div>
    )
}

export default ResturantCard;