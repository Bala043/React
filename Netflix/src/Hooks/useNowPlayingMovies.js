
import {options} from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addNowPlayingMovies} from '../utils/moviesSlice'
const useNowPlayingMovies=()=>{
    const dispatch=useDispatch();
     const nowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies)
  const getNowPlayingMovies = async () => {
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',options)
    const json=await data.json();
    dispatch(addNowPlayingMovies(json.results))


  };
  useEffect(()=>{
     if(!nowPlayingMovies){
    getNowPlayingMovies();
     }
  },[])
}
export default useNowPlayingMovies;