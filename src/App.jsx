import { useState ,useEffect } from 'react'
import './App.css'
import Card from "./components/Card"
// import flag from './json/data.json'
import axios from 'axios'
import FormCountry from './components/FormCountry'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CountryFlag from './pages/CountryFlag'
import ProtectedRoutes from './pages/ProtectedRoutes'

function App() {

  const [flags, setFlags] = useState()  

  // llamada a API usando axios
  // primero se instala axios npm i axios

  useEffect(() => {
    const URL = 'https://restcountries.com/v3.1/all'
    axios.get(URL)
      .then(res => setFlags(res.data))
      .catch(err => console.log(err))
  },[])

  console.log(flags)

  return (
    <article className='hero'>
      {/* <header className='head'>
        <h1 className='titleHead'>Where in the world?</h1>
        <div className="container-btn-mode">
          <div className="btn-mode sun active">
            <i className="fa-solid fa-sun">Sun</i>
          </div>
          <div className="btn-mode moon">
            <i className="fa-solid fa-moon">Moon</i>
          </div>
        </div>
      </header> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={< ProtectedRoutes />}>
          <Route path='/countryFlag' element={ <CountryFlag />}/>
        </Route>
      </Routes>
      
      {/* <FormCountry/>
      <div className='cardCountry'>
        {
          flags?.map(flag => (
            <Card 
              key={flag.name.official}
              flag={flag}
            />
          ))
        }
      </div> */}
    </article>
  )
}

export default App
