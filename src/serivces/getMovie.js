import axios from "axios";

export const getMovie = async ({next}) =>{
    return await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=7be72508776961f3948639fbd796bccd&page=${next}`);
}