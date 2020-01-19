import React from 'react'
import { View, StyleSheet } from 'react-native'
import SearchBar from './searchBar'
import Axios from 'axios';
import DisplayMovie from './DisplayMovie';

export default function Search() {
    const [movie , setMovie] = React.useState("");
    const [searchMovies , setSearchMovies ] = React.useState([]);

    const handleChange = e=>{
        setMovie(e);
        console.log(e);
    }

    const searchMovie = async  () =>{
       let data = await  Axios.get(`http://www.omdbapi.com/?apikey=19a92861&s=${movie}`);
       if(data){
           setSearchMovies(data.data.Search);
           console.log(data.data);
       }
    }

    if(searchMovies.length!==0){
        return (
            <View style={style.container}>
               <SearchBar handleChange={handleChange} searchMovie={searchMovie}/>
               <DisplayMovie movies={searchMovies} />
            </View>
       
        )
    }
    else{
        return (
        
            <View style={style.container}>
               <SearchBar handleChange={handleChange} searchMovie={searchMovie}/>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "center",
        alignContent : "center",
        alignItems : "center",
        alignSelf : "center",
        marginTop : 15,
        marginBottom : 15
    }
})
