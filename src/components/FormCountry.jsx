import React from 'react'

const FormCountry = () => {

    //* necesito usar el routes para usar el navigate creo que tambine tengo que usar el redux
    // const navigate = useNavigate()

    // const submit = e => {
    //     e.preventDefault()
    //     navigate(``)
    // }

  return (
    <form className='country_form' >
        <input type="text" className='country_input' id='search' placeholder='Search for a country ...' />
        <button className='btn-form'>Search</button>
    </form>
  )
}

export default FormCountry