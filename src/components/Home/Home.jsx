import React from 'react'
import "./Home.css"
import hero_banner from "../../assets/hero_banner.jpg"
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
    <div className='home'>
      <img src={hero_banner} alt="" />
    </div>

    </div>
  )
}

export default Home
