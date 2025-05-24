import React from 'react'
import { MOVIE_IMG } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  return (
    posterPath && (
      <div className="w-36 md:w-40 pr-4 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden">
        <img
          src={MOVIE_IMG + posterPath}
          alt="movie Logo"
          className="w-full h-auto block rounded-lg"
          loading="lazy"
        />
      </div>
    )
  )
}

export default MovieCard
