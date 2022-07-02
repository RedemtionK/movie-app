import React from 'react'
import Content from '../components/Content'
import FeaturedMovies from '../components/FeaturedMovies'
import FeaturedTvShows from '../components/FeaturedTvShows'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <div className='container'>
      <h4 className='demanded-movies'> The Most Demanded Movies</h4>
      <div className='row'>  <HeroSection /></div>

      <div className='container-fluid movie'>
        <h4>Featured Movies</h4>
        <div className='row'>
          <FeaturedMovies />
        </div>

      </div>
      <div className='container-fluid movie'>
        <h4>Featured TvShows</h4>
        <div className='row'>
          <FeaturedTvShows />
        </div>
      </div>
      <h3 className='rent-free'>Rent this movies free tonight</h3>
      <div className='horizontal-scrollable content-free'>
         
      <div className='row '>
        
        <Content/>
       
        
      </div>
      </div>
    </div>
  )
}