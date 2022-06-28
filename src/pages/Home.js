import React from 'react'
import FeaturedMovies from '../components/FeaturedMovies'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div className='container'>
       <h4> The Most Demanded Movies</h4>
      <div className='row'>  <HeroSection/></div>
   
    <div className='container-fluid movie'>
      <h4>Featured Movies</h4>
    <div className='row'>
      <FeaturedMovies />
    </div>
  </div>
  </div>
  )
}