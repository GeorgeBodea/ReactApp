import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { Home } from "../pages/HomePage" 

export default function AllRoutes(props) {
  return (
    <>
      <Router> 
          <Routes>
            <Route path="*" element={<Home/>}/>
          </Routes>
      </Router>
    </>
  )
}