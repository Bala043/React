
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import GptSearch from './GptSearch'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../Hooks/usePopularMovies'
import useTopRated from '../Hooks/useTopRated'
import useUpcoming from '../Hooks/useUpcoming'
import { useSelector } from 'react-redux'
const Browse = () => {


  const showGptSearch =useSelector((store)=>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();
  
  return (
    <div>
      <Header/>
{showGptSearch?(<GptSearch/>):(<><MainContainer/><SecondaryContainer/></>)}
       
        
      
      
    </div>
  )
}

export default Browse