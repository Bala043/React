
import {useSelector} from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'

const VideoBackground = ({movieId}) => {
  const trailerVideo=useSelector((store)=>store?.movies.trailerVideo)
  useMovieTrailer(movieId)
 
  return (
    <div className="w-screen -mt-4">
  <iframe
  
    className="w-screen aspect-video "
    
    src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&rel=0&modestbranding=1&controls=0&loop=1&playlist=${trailerVideo?.key}`}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    referrerPolicy="strict-origin-when-cross-origin"
    title="youtube video player"
    allowFullScreen
  ></iframe>
</div>

  )
}

export default VideoBackground