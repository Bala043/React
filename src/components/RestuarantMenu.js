import React from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import useRestuarantMenu from '../utils/useRestuarantMenu'
import RestuarantCategory from './RestuarantCategory'
import {useState}from 'react'
const RestuarantMenu = () => { 
  const [showIndex,setShowIndex]=useState(null) 
    const{resId}=useParams()
    const resInfo=useRestuarantMenu(resId)
   if(resInfo===null){
        return <Shimmer></Shimmer>}
    const{name,cuisines,areaName,avgRating,costForTwoMessage}=resInfo.cards[2]?.card?.card?.info 
    const items=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c)=>c?.card?.card?.["@type"]===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     return ( 
<div className="Hotel-Detail-Container">
  <div className="hotel-info">
    <h4 className="label">Name</h4>
    <h2 className="ResName">{name}</h2>
  </div>
  <div className="hotel-info">
    <h4 className="label">Cuisines</h4>
    <div className="cuisines">{cuisines.join(", ")}</div>
  </div>
  <div className="hotel-info">
    <h4 className="label">Ratings</h4>
    <div className="ratings">{avgRating}</div>
  </div>
  <div className="hotel-info">
    <h4 className="label">Area</h4>
    <div className="areaName">{areaName}</div>
  </div>
  <div className="hotel-info">
    <h4 className="label">Cost for Two</h4>
    <div className="costForTwoMessage">{costForTwoMessage}</div>
  </div>
  <div className="Menucontainer">
    {items.map((category, index) => (
      <RestuarantCategory
      showItems={(index===showIndex?true:false)
      }
       key={category?.card?.card?.categoryId} 
      data={category?.card?.card}
      showIndex={showIndex}
      setShowIndex={()=>{index===showIndex?setShowIndex(null):setShowIndex(index)}} 
    />
    ))}
  </div>
</div>
)
}
export default RestuarantMenu