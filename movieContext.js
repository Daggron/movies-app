import React from 'react';

export const MovieContext = React.createContext();

export function MovieContextProvider(props){
    const [movies , SetMovies] = React.useState([]);

    return(
        <MovieContext.Provider value={[movies ,SetMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

