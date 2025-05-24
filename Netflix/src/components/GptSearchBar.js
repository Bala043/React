import React from 'react';
import { useRef } from 'react';
import client from '../utils/huggingFace.js';
import { options } from '../utils/constants.js';
import { addGptMovieResult } from '../utils/gptSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/lang.js';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const movieSearchTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false",
      options
    );
    const json = await data.json();
    return json?.results;
  };

  const handleGptSearchClick = async () => {
    const searchQuery = searchText.current.value;
    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query:" +
      searchQuery +
      "Only Give me the top 5 movies that are available only in netflix not others,comma separated like the example result given ahead. Result:Dragon,Maaman,Tourist Family,Nilavukku En Mel Enna Kovam,Retro  note that your response contains only movie names and that are available in netflix";

    const chatCompletion = await client.chatCompletion({
      provider: "nebius",
      model: "deepseek-ai/DeepSeek-V3-0324",
      messages: [
        {
          role: "user",
          content: gptQuery,
        },
      ],
    });

    if (!chatCompletion?.choices) {
      return;
    }

    const movieList = chatCompletion?.choices[0]?.message?.content.split(",");
    const movieResult = movieList.map((movie) => movieSearchTMDB(movie.trim()));
    const tmdbResults = await Promise.all(movieResult);
    console.log(tmdbResults);
    dispatch(addGptMovieResult({ movieName: movieList, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[50%] md:pt-[10%] flex justify-center">
   <form
  className="flex w-full md:w-1/2 bg-black rounded-lg overflow-hidden shadow-lg m-4"
  onSubmit={(e) => e.preventDefault()}
>
  <input
    ref={searchText}
    type="text"
    placeholder={lang[langKey].searchPlaceholder}
    className="flex-grow p-4 bg-gray-900 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition"
  />
  <button
    type="submit"
    onClick={handleGptSearchClick}
    className="p-4 bg-red-700 text-white rounded-r-lg hover:bg-red-800 active:scale-95 transition-transform duration-150 shadow-md"
  >
    {lang[langKey].searchButton}
  </button>
</form>

    </div>
  );
};

export default GptSearchBar;
