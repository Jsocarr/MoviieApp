import { useDispatch, useSelector } from "react-redux";
import { startingListarMovies } from "../../../store/movies/moviesThunks";

export const useMovies = ()=> {
    const { listarMovies, loadingMovies, errorMovies } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const onListarMovies= ({next}) => {
        dispatch ( startingListarMovies({next}) );
    };

    return {
        listarMovies,
        loadingMovies,
        errorMovies,
        onListarMovies
    }
}