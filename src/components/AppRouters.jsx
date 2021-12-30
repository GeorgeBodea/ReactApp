import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { Home } from "../pages/HomePage" 
import { Loginpage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"
import { Profilepage } from "../pages/ProfilePage"
import { Pagenotfound } from "../pages/PageNotFound" 

export default function AllRoutes(props) {
  return (
    <>
      <Router> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
            <Route path="/profile" element={<Profilepage/>}/>
            <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
      </Router>
    </>
  )
}