import {Button, Grid, TextField, Typography } from "@mui/material";
import {useState, useEffect} from 'react';
import { useMovies } from "./hooks/useMovies";

export const MovieApp = () => {
    const [ next, setNext ] = useState(1);
    const [ nextSearch, setNextSearch ] = useState(1);
    const [ searchKey, setSearchKey ] = useState ('');
    const { listarMovies, searchState, pagesNumber, onListarMovies, onBuscar} = useMovies();
    const last = ()=> next === 1 ? 1 : setNext(next - 1);
    const lastSearch = ()=> nextSearch === 1 ? 1 : setNextSearch(nextSearch - 1);

    const search = (e) =>{
        e.preventDefault();
        onBuscar({searchKey,nextSearch})
    }

    useEffect(()=>{
        onBuscar({searchKey,nextSearch});  
      },[nextSearch]);

    useEffect(()=>{
        onListarMovies({next});  
      },[next]);

    useEffect(() => {
        if (searchKey.trim() === "") {
          setNext(1);
          setNextSearch(1)
          onListarMovies({next})
        }
    }, [searchKey]);
    
    return(
        <>
            <Typography variant="h1" sx={{textAlign:'center', marginTop: 2}}>Popular Movies</Typography>
            <Typography variant="h3" sx={{textAlign:'center', marginTop: 2}}>Buena Suerte Esther</Typography>
            <Grid container pt={1} spacing={1} justifyContent="center" alignItems="center" marginTop={3} gap={3}>
                <Grid item sm={3} xs={7}>
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
                            borderRadius:1,
                            marginLeft:3
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
                {
                    !searchState ? 
                    <>
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
                            onClick={()=> {
                                if(next < pagesNumber){
                                    setNext(next + 1)
                                }
                            }}
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
                    </>
                    : 
                    <>
                        <Button 
                        onClick={lastSearch}
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
                            onClick={()=>{
                                if(nextSearch < pagesNumber){
                                    setNextSearch(nextSearch + 1)
                                }
                            }}
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
                    </>
                }
                
            </Grid>
        </>
    )
}
