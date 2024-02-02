import { useState ,useEffect } from 'react'
import './App.css'
// import flag from './json/data.json'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CountryFlag from './pages/CountryFlag'
import ProtectedRoutes from './pages/ProtectedRoutes'
import CountryInfo from './pages/CountryInfo'

function App() {

  

  return (
    <article className='hero'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={< ProtectedRoutes />}>
          <Route path='/countryFlag' element={ <CountryFlag />} />
          <Route path='/countryFlag/:name' element={ <CountryInfo /> } />
        </Route>
      </Routes>
    </article>
  )
}

export default App
