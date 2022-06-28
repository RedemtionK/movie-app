import React, { useContext } from 'react'
import movieContext from '../context/MovieContext'
import { Link } from 'react-router-dom'

const FeaturedTvShows = () => {
    const {movies}=useContext(movieContext)
    return (
        <>
        

            {movies.map((movie, index) =>{
                if(movie.Featured===1 && movie.Type==="series"){
                    return(
                     <div className='image-container d-flex justify-content-start m-3'>
                        
                    <Link to={`/movies/${movie.id}`}>
                        <img  src={movie.Poster} alt='movie'>
                            </img></Link>
                            </div>
            )}            
})}
        </>
    )
}

export default FeaturedTvShows
