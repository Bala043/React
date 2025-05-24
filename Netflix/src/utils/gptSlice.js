import { createSlice } from "@reduxjs/toolkit";
const gptSlice=createSlice({
    name:"gpt",
    initialState:{

        showGptSearch:false,
        movieName:null,
        gptMovies:null,
    },
    reducers:{
        toggleGptSearchView:(state)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
            const{movieName,movieResults}=action.payload
            state.gptMovies=movieResults
            state.movieName=movieName
        }
    }
})
export const{toggleGptSearchView,addGptMovieResult}=gptSlice.actions
export default gptSlice.reducer




