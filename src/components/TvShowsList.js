import React, { useState, useEffect  } from 'react'
import { Link } from 'react-router-dom'
import SearchBox from './SearchBox';


function TvShowsList() {
  const [search, setSearchValue]=useState('');
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch(`https://backend-movie26.herokuapp.com/movies/title?title=${search}`)
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
  }, [search])
    
  return (
    <>
     <SearchBox search={search} setSearchValue={setSearchValue}/>
     <div></div>
    {movies.map((movie, index) =>{
      
            if(movie.type==="series"){
                return(
                  
                  <div className='col-6 col-sm-3'>
               <Link to={`/movies/${movie.id}`}> 
                <img className='image-container-only' src={movie.poster} alt='movie'></img>
                
                </Link>

                <h6>{movie.title}</h6>
                </div>
                )
            }
       
            
          
         } )}
</>
  )
}

export default TvShowsList
