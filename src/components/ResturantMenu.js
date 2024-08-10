import React from 'react'
import {useState,useEffect} from "react";
import Shimmer from './shimmer';
import { useParams } from "react-router-dom";
import { MENU_URL } from '../utils/constantlink';
  const ResturantMenu = () => {

    const[resInfo,setResInfo]=useState(null);
    const {resid}=useParams();
    console.log(resid)
    

    const fetchMenu= async()=>{
      const data=await fetch(MENU_URL+resid);
      const json= await data.json();
      setResInfo(json.data);

    }
    useEffect(()=>{
      fetchMenu();
  
    },[])
    
// useEffect(() => {
      //   fetchMenu();
// }, []); // Empty dependency array ensures this runs once on mount

// const fetchMenu = async () => {
//   try {
//     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.3545784&lng=85.8162156&restaurantId=92292&catalog_qa=undefined&submitAction=ENTER");
//     const json = await data.json();
//     console.log(json);
//   } catch (error) {
//     console.error("Error fetching menu:", error);
//   }
// };

if(resInfo==null){
  return <Shimmer/>
}

    const {name,avgRating,cuisines}=resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    
  return (
    <div>
      
      <h1>{name}</h1>
      <h3>{avgRating}</h3>
      <h3>{cuisines.join(", ")}</h3>
    <h2>.....MENU......</h2>
      <ul>
        {/* <li> {itemCards[0]?.card?.info?.name} </li> */}
        {itemCards.map((res)=>(
        <li key={res.card.info.id} >
          {res.card.info.name} -{"Rs"} {res.card.info.price/100}
          </li> 
        ))}
      </ul>
        </div>
  )
}

export default ResturantMenu