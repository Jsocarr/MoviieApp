import { useDispatch, useSelector } from "react-redux";
import { startingListarMovies, startingListarMoviesById } from "../../../store/movies/moviesThunks";

export const useMovies = ()=> {
    const { listarMovies, loadingMovies, errorMovies } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const onListarMovies= ({next}) => {
        dispatch ( startingListarMovies({next}) );
    };

    const onBuscar = (searchKey) =>{
        dispatch(startingListarMoviesById({searchKey}));
    }
 
    return {
        listarMovies,
        loadingMovies,
        errorMovies,
        onListarMovies,
        onBuscar,
    }
}