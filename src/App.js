import './style/App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import movieContext from './context/MovieContext';
import TvShows from './pages/TvShows';
import MoviesTitles from './pages/MoviesTitles';
import SelectedMovie from './pages/SelectedMovie';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/movies")

      .then((res) => {

        return res.json()


      })

      .then(json => {

        setMovies(json);

      })
      .catch((err) => {

        console.log(`Error ${err}`);

      })

  }, [])
  return (
    <>
      <Navbar />


<movieContext.Provider value={{movies,setMovies}}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/tv-shows" element={<TvShows/>} />
        <Route path="/movies" element={<MoviesTitles/>} />
        <Route path = "/movies/:id" element = {<SelectedMovie/>}/>
        <Route path = "/log-in" element = {<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
</movieContext.Provider>

      <Footer />

    </>
  );
}

export default App;