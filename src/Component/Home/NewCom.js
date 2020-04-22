import React,{useContext} from 'react'
import {movieContext} from './MovieProvider'


const NewCom = () => {
     const [movies, setMovies] = useContext(movieContext)
    return (
        <div>
           {movies.map(movie=>{
               return(<>
                   <li>{movie.name}</li>
                   <li>{movie.price}</li>
                   </>
               )
           })}
        </div>
    )
}

export default NewCom
