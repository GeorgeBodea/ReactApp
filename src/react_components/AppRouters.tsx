import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from "../pages/HomePage" 
import { Loginpage } from "../pages/LoginPage"
import { Registerpage } from "../pages/RegisterPage"
import { Profilepage } from "../pages/ProfilePage"
import { Pagenotfound } from "../pages/PageNotFound"

import { useAuth } from "../contexts/AppContexts"
import { Navigate, Outlet } from 'react-router-dom'

export default function AllRoutes(props: any) {
  return (
    <>
      <Router> 
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Loginpage/>}/>
            <Route path="/register" element={<Registerpage/>}/>
            <Route element={<RequireAuth />}>
              <Route path="/profile" element={<Profilepage/>}/>
            </Route>
            <Route path="*" element={<Pagenotfound/>}/>
          </Routes>
      </Router>
    </>
  )
}

function RequireAuth() {
  let { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
