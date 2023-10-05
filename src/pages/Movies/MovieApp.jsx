import {Button, Grid, TextField, Typography } from "@mui/material";
import {useState, useEffect} from 'react';
import { useMovies } from "./hooks/useMovies";

export const MovieApp = () => {
    const [ next, setNext ] = useState(1);
    const [ searchKey, setSearchKey ] = useState ('');
    const { listarMovies, onListarMovies, onBuscar} = useMovies();
    const last = ()=> next === 1 ? 1 : setNext(next - 1);

    const search = (e) =>{
        e.preventDefault();
        onBuscar(searchKey)
      }

    useEffect(()=>{
        onListarMovies({next});  
      },[next]);

    useEffect(() => {
        if (searchKey.trim() === "") {
          setNext(1);
          onListarMovies({next})
        }
    }, [searchKey]);
    
    return(
        <>
            <Typography variant="h1" sx={{textAlign:'center', marginTop: 2}}>Popular Movies</Typography>
            <Grid container pt={1} spacing={1} justifyContent="center" alignItems="center" marginTop={3} marginLeft={1} >
                <Grid item sm={6} xs={8}>
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
                            borderRadius:1
                        }}
                        onChange={(e) => {
                            setSearchKey(e.target.value)
                        }}
                    />
                </Grid>
                <Grid item sm={1} xs={4}>
                    <Button 
                        variant="contained" 
                        onClick={search}
                        sx={{
                            alignSelf: 'center',
                            backgroundColor: '#800080', 
                            color: '#fff', 
                            '&:hover': {
                                backgroundColor: '#6a006a', 
                            },
                        }}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>    
            <div className="container">
            {
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
