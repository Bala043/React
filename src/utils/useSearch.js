import {useState} from 'react'
const useSearch=()=>{
    const [SearchText,setSearchText]=useState("")
   return[SearchText,setSearchText]
}
export default useSearch