import React, { useContext } from 'react'
import movieContext from '../context/MovieContext'
import { Link } from 'react-router-dom'

const Content = () => {
    const {movies}=useContext(movieContext)
    return (
        <>
        

            {movies.map((movie, index) =>{
                if(movie.rent===0 ){
                    return(
                     <div className='content-container col '>
                        
                    <Link  to={`/movies/${movie.id}`}>
                        <img className='movies-free' src={movie.poster} alt='movie'>
                            </img></Link>
                            </div>
            )}            
})}
        </>
    )
}

export default Content