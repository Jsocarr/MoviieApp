import { startMovies, okMovies, errorMovies, dissableSearch, ennableSearch } from "./moviesSlice";
import { getMovie, getMovieById } from "../../serivces";

export const startingListarMovies = ({next})=>{
    return async ( dispatch )=>{
        dispatch( startMovies() );
        try {
            const {data} = await getMovie({next});
            if (data){
                dispatch( okMovies(data) );
                dispatch( dissableSearch());
                return;
            }
        } catch (error) {
            console.error({error});
            dispatch(errorMovies(error));
        } 
    }

};

export const startingListarMoviesById = ({searchKey, nextSearch})=>{
    return async ( dispatch )=>{
        dispatch( startMovies() );
        try {
            const {data} = await getMovieById({searchKey, nextSearch});
            if (data){
                dispatch( okMovies(data) );
                dispatch( ennableSearch()) ;
                return;
            }
        } catch (error) {
            console.error({error});
            dispatch(errorMovies(error));
        } 
    }

};
