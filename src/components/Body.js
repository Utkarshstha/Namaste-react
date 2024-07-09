
import ResturantCard from "./ResturantCard";
import resData from "../utils/mockdata";
import {useState,useEffect} from "react";
 import Shimmer from "./shimmer";
const Body=()=>{
    let [listOfRest, setlistOfRest]=useState([])
    let [filterRest, setfilterRest]=useState([])    
    // let [listOfRest, setlistOfRest]=useState([
    //     {
    //         type: "restaurant",
    //         data: {
    //         type:"f",
    //         ld : "724022",
    //         name: "Nepali Pizza",
    //         uuid: "2fcd35dO-ela7-4555-9477-91bc3e2dOa37",
    //         city: "7",
    //         area: "Newtown",
    //         totalRatingsString: "5000+ ratings",
    //         cloudinarylmageld: "ab979bffbd658e74de650a15ca0092a3",
    //         cuisines: [
    //         "Pizzas",
    //         "Pastas",
    //         "Italian",
    //         "Desserts",
    //         "Beverages"],
            
    //         costForTwo: 40000,
    //         costForTwoString: "400 FOR TWO",
    //         deliveryTime: 32,
    //         minDeliveryTime: 32,
    //         maxDeliveryTime: 32,
    //         slastring: "32",
    //         avgRating: "4.5",
    //         lastMileTravel: 3,
    //         },
    //         },

    //         {
    //             type: "restaurant",
    //             data: {
    //             type:"f",
    //             ld : "724022",
    //             name: "kfc",
    //             uuid: "2fcd35dO-ela7-4555-9477-91bc3e2dOa37",
    //             city: "7",
    //             area: "Newtown",
    //             totalRatingsString: "5000+ ratings",
    //             cloudinarylmageld: "ab979bffbd658e74de650a15ca0092a3",
    //             cuisines: [
    //             "Pizzas",
    //             "Pastas",
    //             "Italian",
    //             "Desserts",
    //             "Beverages"],
                
    //             costForTwo: 40000,
    //             costForTwoString: "400 FOR TWO",
    //             deliveryTime: 32,
    //             minDeliveryTime: 32,
    //             maxDeliveryTime: 32,
    //             slastring: "32",
    //             avgRating: "3.9",
    //             lastMileTravel: 3,
    //             },
    //             },
    //         {
    //             type: "restaurant",
    //             data: {
    //             type:"f",
    //             ld : "724022",
    //             name: "pizza hut ",
    //             uuid: "2fcd35dO-ela7-4555-9477-91bc3e2dOa37",
    //             city: "7",
    //             area: "Newtown",
    //             totalRatingsString: "5000+ ratings",
    //             cloudinarylmageld: "ab979bffbd658e74de650a15ca0092a3",
    //             cuisines: [
    //             "Pastas",
    //             "Italian",
    //             "Desserts",
    //             "Beverages"],
                
    //             costForTwo: 40000,
    //             costForTwoString: "400 FOR TWO",
    //             deliveryTime: 32,
    //             minDeliveryTime: 32,
    //             maxDeliveryTime: 32,
    //             slastring: "32",
    //             avgRating: "4.1",
    //             lastMileTravel: 3,
    //             },
    //             },
    // ])
// let istOfRest=[
//     {
//         type: "restaurant",
//         data: {
//         type:"f",
//         ld : "724022",
//         name: "Nepali Pizza",
//         uuid: "2fcd35dO-ela7-4555-9477-91bc3e2dOa37",
//         city: "7",
//         area: "Newtown",
//         totalRatingsString: "5000+ ratings",
//         cloudinarylmageld: "ab979bffbd658e74de650a15ca0092a3",
//         cuisines: [
//         "Pizzas",
//         "Pastas",
//         "Italian",
//         "Desserts",
//         "Beverages"],
        
//         costForTwo: 40000,
//         costForTwoString: "400 FOR TWO",
//         deliveryTime: 32,
//         minDeliveryTime: 32,
//         maxDeliveryTime: 32,
//         slastring: "32",
//         avgRating: "4.5",
//         lastMileTravel: 3,
//         },
//         },
//     {
//         type: "restaurant",
//         data: {
//         type:"f",
//         ld : "724022",
//         name: "kfc",
//         uuid: "2fcd35dO-ela7-4555-9477-91bc3e2dOa37",
//         city: "7",
//         area: "Newtown",
//         totalRatingsString: "5000+ ratings",
//         cloudinarylmageld: "ab979bffbd658e74de650a15ca0092a3",
//         cuisines: [
//         "Pizzas",
//         "Pastas",
//         "Italian",
//         "Desserts",
//         "Beverages"],
        
//         costForTwo: 40000,
//         costForTwoString: "400 FOR TWO",
//         deliveryTime: 32,
//         minDeliveryTime: 32,
//         maxDeliveryTime: 32,
//         slastring: "32",
//         avgRating: "3.9",
//         lastMileTravel: 3,
//         },
//         },
//     {
//         type: "restaurant",
//         data: {
//         type:"f",
//         ld : "724022",
//         name: "pizza hut ",
//         uuid: "2fcd35dO-ela7-4555-9477-91bc3e2dOa37",
//         city: "7",
//         area: "Newtown",
//         totalRatingsString: "5000+ ratings",
//         cloudinarylmageld: "ab979bffbd658e74de650a15ca0092a3",
//         cuisines: [
//         "Pastas",
//         "Italian",
//         "Desserts",
//         "Beverages"],
        
//         costForTwo: 40000,
//         costForTwoString: "400 FOR TWO",
//         deliveryTime: 32,
//         minDeliveryTime: 32,
//         maxDeliveryTime: 32,
//         slastring: "32",
//         avgRating: "4.1",
//         lastMileTravel: 3,
//         },
//         },
    
// ];

let [searchText, setsearchText]= useState([])

useEffect(()=>{
    fetchData();
}, []);

const fetchData= async()=>{
    const data= await fetch("https://dummyjson.com/recipes")
    const json= await data.json();

    // console.log(json)
    setlistOfRest(json.recipes)
    setfilterRest(json.recipes)
    // setlistOfRest(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    
}

if(listOfRest.length==0){
    return <Shimmer/>
}


    return(
        <div className="Body">
            <div className="filter">
                <div className="search">
                <input type="text" className="search-bar" value={searchText} onChange= {(e)=>{
                        setsearchText(e.target.value)
                }}
                />
                   
                <button onClick={()=>{
                    let searchList=listOfRest.filter((res)=>res.name.toLowerCase().includes(searchText.toLowerCase()))
                    setfilterRest(searchList)
                }}>search</button>

                </div>
                
                <button className="filter-btn" onClick={()=>{
                 let filteredList=listOfRest.filter(
                    (res)=> res.rating > 4.7 )
                    setlistOfRest(filteredList);
            // console.log(listOfRest);
                  
                }}
                >
                Top Rated Resturant
                </button>
                 </div>
            <div className="res-container">

            {
                     filterRest.map((restauran) =>(
                        <ResturantCard key={restauran.id} 
                        resObj={restauran}/>
                     ))

                  }

                



            {/* <ResturantCard 
                resObj={resData[0]}
                 />
                <ResturantCard 
                resObj={resData[1]}
                 />
                 <ResturantCard 
                resObj={resData[2]}
                 /> */}
                 
        
                  

                {/* <ResturantCard
                    resName="hamro food"
                 cuisine="biryani, momo"
                /> */}
                
            </div>
        </div>
    )
}

export default Body;