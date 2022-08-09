import { Button } from "bootstrap";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const SelectedMovie = () => {
  const [movies, setMovies] = useState({
   
    type: "",
    year: "",
    description:"",
    title: "",
    big:"",
    rent:"",
    buy:"",
    featured:"",
    poster: "",
  });
  const { id } = useParams();

  useEffect(() => {
    //Async operation GET
    fetch(`https://movie-app-klaus.herokuapp.com/movies${id}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        
        setMovies(json.body[0]);
        
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);

  return (
    <div className="container">
      <h2>Movie: {movies.title}</h2>
      <div className="row align-items-start">
        <div className="col"><img className="poster" src={movies.poster} />
        </div>
        <div className="col"> <img className="big-picture" src={movies.big}></img></div>
        
       
      </div>
      <div>
      
      </div>
      <p>Title : {movies.title}</p>
      <p>Year : {movies.year}</p>
     
      <p>{movies.description} </p>

      <button type="submit" className="btn btn-primary">
       Rent Movie for {movies.rent} $
      </button>
      
      <button type="submit" className="btn btn-primary">
       Buy Movie for {movies.buy} $
      </button>
      
        

      </div>
    
  );
};

export default SelectedMovie;
