
import {options} from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import {addTopRated} from '../utils/moviesSlice'
const useTopRated=()=>{
    const dispatch=useDispatch();
         const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies)
  const getTopRated = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1',options)
    const json=await data.json();
    dispatch(addTopRated(json.results))


  };
  useEffect(()=>{

    !topRatedMovies && getTopRated();

  },[])
}
export default useTopRated;