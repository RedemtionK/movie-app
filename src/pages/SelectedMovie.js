import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const SelectedMovie = () => {
  const [movies, setMovies] = useState({
    Title: "",
    Year: "",
    imdbID: "",
    Type: "",
    Poster: "",
  });
  const { id } = useParams();

  useEffect(() => {
    //Async operation GET
    fetch(`http://localhost:5000/movies/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setMovies(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <div className="container">
      <h2>Movie</h2>
      <div className="row align-items-start">
        <div className="col"><img className="poster" src={movies.Poster} />
        </div>
        <div className="col"> <img className="big-picture" src={movies.Big}></img></div>
        
       
      </div>
      <div>
      
      </div>
      <p>Title : {movies.Title}</p>
      <p>Year : {movies.Year}</p>
     
      <p>{movies.Description} </p>

      <button type="submit" className="btn btn-primary">
       Rent Movie for {movies.Rent} $
      </button>
      
      <button type="submit" className="btn btn-primary">
       Buy Movie for {movies.Buy} $
      </button>
      
        

      </div>
    
  );
};

export default SelectedMovie;
