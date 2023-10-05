import { startMovies, okMovies, errorMovies } from "./moviesSlice";
import { getMovie } from "../../serivces";

export const startingListarMovies = ({next})=>{
    return async ( dispatch )=>{
        dispatch( startMovies() );
        try {
            const {data} = await getMovie({next});
            if (data){
                dispatch( okMovies(data.results) );
                return;
            }
        } catch (error) {
            console.error({error});
            dispatch(errorMovies(error));
        } 
    }

};
