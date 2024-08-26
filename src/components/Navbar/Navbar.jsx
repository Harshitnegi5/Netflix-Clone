import React from 'react'
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import caret_icon from "../../assets/caret_icon.svg"
import profile_img from "../../assets/profile_img.png"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="nav-right">
      <img src={search_icon} alt="" />
      <p>Children</p>
      <img src={bell_icon} alt="" />
      <div className="profile">
        <img src={profile_img} alt=""  />
        <img src={caret_icon} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Navbar
