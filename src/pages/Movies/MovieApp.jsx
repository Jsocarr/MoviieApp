import {Button, Grid, TextField, Typography } from "@mui/material";
import {useState, useEffect} from 'react';
import { useMovies } from "./hooks/useMovies";

export const MovieApp = () => {
    const [ next, setNext ] = useState(1);
    const [ buscar, setsearch ] = useState ('');
    const { listarMovies, onListarMovies} = useMovies();
    const [selecteMovie, setSelectedMovie] = useState([]);
    const [movieFound, setMovieFound] = useState(false);
    const last = ()=> next === 1 ? 1 : setNext(next - 1);

    const search = () =>{
        const name = listarMovies.filter(element => element.original_title === buscar);
        console.log(name.length)
        if(name.length > 0){
            setMovieFound(true)
            setSelectedMovie(name)
        }
        else{
            setMovieFound(false)
            setSelectedMovie([])
        }
      }

    useEffect(()=>{
        onListarMovies({next});  
      },[next]);

    useEffect(() => {
        if (buscar.trim() === "") {
          setSelectedMovie([]);
          setMovieFound(false)
        }
    }, [buscar]);
    
    return(
        <>
            <Typography variant="h1" sx={{textAlign:'center', marginTop: 2}}>Popular Movies</Typography>
            <Grid container pt={1} spacing={1} justifyContent="center" alignItems="center" marginTop={3} >
                <Grid item sm={6} xs={12}>
                    <TextField
                        size="small"
                        fullWidth
                        label="Search by Name"
                        sx={{
                            color:'white',
                            backgroundColor: '#333', 
                            '& .MuiInputBase-input': {
                                color: 'white',  
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',  
                            },
                        }}
                        value={buscar}
                        onChange={(e) => {
                            setsearch(e.target.value)
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && e.target.value.trim() !== "" ) {
                              search();
                            }
                        }}
                    />
                </Grid>
            </Grid>    
            <div className="container">
            {
                buscar.trim() !== ""
                ? (movieFound ? (
                    selecteMovie?.map(element => {
                        return (
                            <div key={element.id} className="pelicula">
                                <div className="image-container">
                                    <img
                                        className="imagen"
                                        src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                                        alt=""
                                    />
                                    <p className="description">Descripción: {element.overview}</p>
                                </div>
                                <h2 className="title"> {element.original_title} </h2>
                            </div>
                        )
                    })
                ) : (
                        <Typography variant="body1" sx={{
                            textAlign: 'center',
                            width: '450%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            No se encontraron resultados.
                        </Typography>
                )) : (
                    listarMovies?.map(element => {
                        return (
                            <div key={element.id} className="pelicula">
                                <div className="image-container">
                                    <img
                                        className="imagen"
                                        src={`https://image.tmdb.org/t/p/original/${element.poster_path}`}
                                        alt=""
                                    />
                                    <p className="description">Descripction: {element.overview}</p>
                                </div>
                                <h2 className="title"> {element.original_title} </h2>
                            </div>
                        )
                    })
                )
            }
            </div>
            <Grid 
                container 
                pt={1} 
                spacing={1} 
                sx={{
                    textAlign:'center', 
                    justifyContent:'center', 
                    alignItems:'center', 
                    padding:5,
                    gap:3}}>
                <Button 
                    onClick={last}
                    sx={{
                        alignSelf: 'center',
                        backgroundColor: '#800080',
                        color: '#fff', 
                        '&:hover': {
                            backgroundColor: '#6a006a', 
                        },
                    }}
                    variant="contained" 
                >
                    Last
                </Button>
                <Button 
                    onClick={()=> setNext(next + 1)}
                    sx={{
                        alignSelf: 'center',
                        backgroundColor: '#800080', 
                        color: '#fff', 
                        '&:hover': {
                            backgroundColor: '#6a006a', 
                        },
                    }}
                    variant="contained"
                > 
                    Next
                </Button>
            </Grid>
        </>
    )
}
