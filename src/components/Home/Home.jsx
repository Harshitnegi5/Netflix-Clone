import React from 'react'
import "./Home.css"
import hero_banner from "../../assets/hero_banner.jpg"
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
    <div className='hero'>
      <img src={hero_banner} alt="" />
    </div>

    </div>
  )
}

export default Home
