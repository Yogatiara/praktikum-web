import { useState } from 'react'
import reactLogo from './assets/react.svg'
import LandingPages from './pages/landingPages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPages />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </Router>


    </>
  )
}

export default App
