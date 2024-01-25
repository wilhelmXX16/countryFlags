import React, { useRef } from 'react'

const FormCountry = () => {

  const inputCountry = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    console.log(inputCountry.current.value)
  }

  return (
    <div>
      <form className='country_form' onSubmit={handleSubmit}>
        <input ref={inputCountry} type="text" className='country_input' placeholder='Search for a country ...' />
        <button className='btn-form'>Search</button>
      </form>
      <select  id="">
        <option value="allRegion"> All region</option>
      </select>
    </div>
    
  )
}

export default FormCountry