import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'

const FormCountry = ({setFormUrl}) => {

  const inputCountry = useRef()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const path = `/countryFlag/${inputCountry.current.value.trim().toLowerCase()}`
    navigate(path)
  }

  //necesito usase el usefecth para extraer la url igual que el busqueda por nombre 
  //!me quede en el dos hora y 35 minutos 
  const handleChange = e => {
    setFormUrl(e.target.value)
  }

  return (
    <div>
      <form className='country_form' onSubmit={handleSubmit}>
        <input ref={inputCountry} type="text" className='country_input' placeholder='Search for a country ...' />
        <button className='btn-form'>Search</button>
      </form>
      <select  onChange={handleChange}>
        <option value="all"> All region</option>
        <option value="africa"> Africa</option>
        <option value="america"> America</option>
        <option value="asia"> Asia</option>
        <option value="europa"> Europa</option>
        <option value="oceania"> Oceania</option>
      </select>
    </div>
    
  )
}

export default FormCountry