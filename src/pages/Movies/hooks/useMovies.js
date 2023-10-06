import { useDispatch, useSelector } from "react-redux";
import { startingListarMovies, startingListarMoviesById } from "../../../store/movies/moviesThunks";

export const useMovies = ()=> {
    const { listarMovies, loadingMovies, errorMovies, searchState, pagesNumber } = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const onListarMovies= ({next}) => {
        dispatch ( startingListarMovies({next}) );
    };

    const onBuscar = ({searchKey, nextSearch}) =>{
        dispatch(startingListarMoviesById({searchKey, nextSearch}));
    }
 
    return {
        listarMovies,
        loadingMovies,
        errorMovies,
        searchState,
        pagesNumber,
        onListarMovies,
        onBuscar,
    }
}