import { createSlice } from "@reduxjs/toolkit";
const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        topRatedMovies:null,
        upComingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
            
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addUpcoming:(state,action)=>{
            state.upComingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
});
export const {addNowPlayingMovies,addPopularMovies,addTopRated,addUpcoming,addTrailerVideo}=moviesSlice.actions;
export default moviesSlice.reducer;
