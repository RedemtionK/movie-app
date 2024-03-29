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
import NotFound from './pages/NotFound';
import Dashboard from './components/Dashboard';
import RequireAuth from './components/RequireAuth';

function App() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetch("https://backend-movie26.herokuapp.com/movies")
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
        <Route path='/dishboard' element={<Dashboard/>}/>
        <Route element={<RequireAuth/>}>
        <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
</movieContext.Provider>
      <Footer />
    </>
  );
}
export default App;