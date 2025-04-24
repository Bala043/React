import Cards from "./Cards"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import useLandingPage from "../utils/useLandingPage";
import useSearch from "../utils/useSearch"
import useOnlineStatus from "../utils/useOnlineStatus"
import NoInterNet from "./NoInterNet";
import { useEffect } from "react";
const Body=()=>{
  const [listOfRestuarents,Dummy,setDummy,handleMoreData]=useLandingPage()
  const [searchText,setSearchText]=useSearch()
const [onlineStatus]=useOnlineStatus()
useEffect(()=>{
  const handleScroll=()=>{
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;
    if (scrollTop + windowHeight >= documentHeight - 100) {
      handleMoreData();}
  }
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
},[])
if (onlineStatus==="f")
  return(<NoInterNet/>)
if (listOfRestuarents.length===0){
  return <Shimmer></Shimmer>
}
 {    return(
           <div className="body">
            <div className="filter-btn">
            <div className="search-container">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search restaurant"
                  data-testid="search-input"
                  value={searchText} onChange={(e)=>setSearchText(e.target.value)}
                />
                      <button className="search-button" onClick={()=>{
                      const SfilteredData=listOfRestuarents.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                      setDummy(SfilteredData)
                 }}>Search</button>
              </div>
              <button className="filterbutton" onClick={()=>{
              const filteredData=listOfRestuarents.filter((restuarent)=>restuarent.info.avgRating>4.5)
              setDummy(filteredData)
              }}>High Rated restuarent</button>
              <button
        className="close-btn"
        onClick={() => {
          setSearchText("")
          setDummy(listOfRestuarents);
        }}
      >
        ✕
      </button>
            </div>
            <div className="card-container">
    {
             Dummy.map((res)=>{
             return <Link className="link-style"key={res.info.id} to={"restuarant/"+res.info.id}><Cards resData={res}/></Link>}
            )
    }      
         </div>
           </div>      
        )
    }
  }
export default Body;