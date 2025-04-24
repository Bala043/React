import { useState,useEffect } from "react";
import { MENU_URL } from "./constants";
const useRestuarantMenu=(resId)=>{
    const[resInfo,setResInfo]=useState(null)
    useEffect(()=>{
        fetchData()
    },[])
async function fetchData(){
    const url=await fetch(MENU_URL+resId)
    const json=await url.json()
    setResInfo(json?.data)
}
return resInfo
}
export default useRestuarantMenu