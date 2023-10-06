import { createSlice } from '@reduxjs/toolkit';

const defaultInitialState = {
    listarMovies: null,
    loadingMovies: false,
    errorMovies: null,
    searchState: false,
    pagesNumber: 0,
};

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: defaultInitialState,
    reducers: {

        //movies
        startMovies : ( state ) => {
            state.listarMovies = null;
            state.loadingMovies = true;
        },
        okMovies : ( state, { payload }) => {
            state.listarMovies = payload.results;
            state.loadingMovies = false;
            state.errorMovies = null;
            state.pagesNumber = payload.total_pages
        },
        errorMovies : ( state, { payload }) =>{
            state.listarMovies = false;
            state.loadingMovies = null;
            state.errorMovies = payload;
        },
        ennableSearch : ( state ) =>{
            state.searchState = true;
        },
        dissableSearch : ( state ) =>{
            state.searchState = false;
        }
    }
});

export const {
    startMovies,
    okMovies,
    errorMovies,
    dissableSearch,
    ennableSearch,
} = moviesSlice.actions;