import React, {useState} from 'react'
import Movie from './Home/Movie'


const Toolbar = () => {

    const[movies, setMovies]=useState([
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
        <div>
            {movies.map(movie=>{
                return(<React.Fragment>
                <h2 key={movie.id}><Movie  name={movie.name}/></h2>
                <h2><Movie name={movie.price}/></h2>
                </React.Fragment>
                )
              
            })}
            
        </div>
    )
}

export default Toolbar
