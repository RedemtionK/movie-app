import React, { useState, useEffect  } from 'react'

import { Link } from 'react-router-dom'

const FeaturedTvShows = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
      fetch(`https://backend-movie26.herokuapp.com/tvShows/Featured?featured=1`)
        .then((res) => {
          return res.json()
        })
        .then(json => {
          console.log(json.body)
          setMovies(json.body);
        })
        .catch((err) => {
          console.log(`Error ${err}`);
        })
    }, [])
    return (
        <>
        

            {movies.map((movie, index) =>{
               
                    return(
                     <div className='image-container d-flex justify-content-start m-3'>
                        
                    <Link to={`/movies/${movie.id}`}>
                        <img  src={movie.poster} alt='movie'>
                            </img></Link>
                            </div>
            )           
})}
        </>
    )
}

export default FeaturedTvShows
