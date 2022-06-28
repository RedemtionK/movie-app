import React, { useContext } from 'react'
import movieContext from '../context/MovieContext'
import { Link } from 'react-router-dom'

function TvShowsList() {
    const {movies}=useContext(movieContext)
  return (
    <>
    {movies.map((movie, index) =>{
            if(movie.Type==="series"){
                return(
                  
                  <div className='col-6 col-sm-3'>
               <Link to={`/movies/${movie.id}`}> 
                <img className='image-container-only' src={movie.Poster} alt='movie'></img>
                
                </Link>

                <h6>{movie.Title}</h6>
                </div>
                )
            }
       
            
          
         } )}
</>
  )
}

export default TvShowsList
