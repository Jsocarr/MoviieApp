import { createSlice } from '@reduxjs/toolkit';

const defaultInitialState = {
    listarMovies: null,
    loadingMovies: false,
    errorMovies: null,

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
            state.listarMovies = payload;
            state.loadingMovies = false;
            state.errorMovies = null;
        },
        errorMovies : ( state, { payload }) =>{
            state.listarMovies = false;
            state.loadingMovies = null;
            state.errorMovies = payload;
        },
    }
});

export const {
    startMovies,
    okMovies,
    errorMovies,
} = moviesSlice.actions;