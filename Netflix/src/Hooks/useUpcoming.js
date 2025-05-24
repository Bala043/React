
import {options} from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addUpcoming} from '../utils/moviesSlice'
const useUpcoming=()=>{
    const dispatch=useDispatch();
         const upComingMovies=useSelector((store)=>store.movies.upComingMovies)
  const getUpcoming = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',options)
    const json=await data.json();
    dispatch(addUpcoming(json.results))


  };
  useEffect(()=>{
    !upComingMovies && getUpcoming();

  },[])
}
export default useUpcoming;