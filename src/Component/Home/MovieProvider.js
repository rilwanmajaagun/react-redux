import React,{useState}from 'react'
import NewCom from './NewCom';

export const movieContext = React.createContext();

const MovieProvider = (props) => {

    const [movies, setMovies]=useState([
        {
            name: "Harry Potter",
            price: '$10',
            id:23124
        },
        {
            name: "Game of Thrones",
            price: '$10',
            id:2566124
        },
        { 
            name: "Money Hesit",
            price: '$10',
            id:23524
        }
    ])
    return (
        <movieContext.Provider value = {[movies, setMovies]}>
            {props.children}
        </movieContext.Provider>
    )
}

export default MovieProvider
