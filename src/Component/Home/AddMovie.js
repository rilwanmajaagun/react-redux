import React,{useState, useContext} from 'react'
import { movieContext } from './MovieProvider'


const AddMovie = (props) => {
    const [movies, setMovies] = useContext(movieContext);
     const [state, setState] = useState([{
         name:'',
         price:"",
         id:''
     }])
     const updateValue = (e)=>{
         setState({ [e.target.name]: e.target.value});
     }
     const AddMovie = (movies)=>{
         console.log(movies)
         setMovies([...movies, {name: state.name,price:state.price}])

     }
    return (
        <form>
            <input type="text" name="name" value={state.name} onChange={updateValue}/>
            <input type="text" name="price" value={state.price} onChange={updateValue}/>
            <button onClick={AddMovie}>submit</button>
        </form>
    )
}

export default AddMovie
