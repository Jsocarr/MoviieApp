import axios from "axios";

export const getMovieById = async ({searchKey, nextSearch}) =>{
    const type = searchKey ? "search" : "discover"
    return await axios.get(`https://api.themoviedb.org/3/${type}/movie?api_key=7be72508776961f3948639fbd796bccd&query=${searchKey}&page=${nextSearch}`);
    /*return await axios.get(`https://api.themoviedb.org/3/${type}/movie`, {
        
        params: {
            api_key: '7be72508776961f3948639fbd796bccd',
            query: searchKey,
            page: 1,
        }
    });*/
}


