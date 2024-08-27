import React from 'react'
import Home from './components/Home/Home'
import Login from "./components/Login/Login"
import { Route , Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
     <Routes>
      <Route path='/'  element={<Home/> }/>
      <Route path='/login'  element={<Login/>}/>
     </Routes>
    </div>
  )
}

export default App
