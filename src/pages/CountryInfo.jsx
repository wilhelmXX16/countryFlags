import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/UseFetch'

const CountryInfo = () => {

    const { name } = useParams()

    const url = `https://restcountries.com/v3.1/name/${name}`
    const [ country, getCountryByName, hasError ]   = useFetch(url)

    useEffect(() => {
        getCountryByName()
    },[name])

    console.log(country)

  return (
    <article>
        {
            hasError
                ? <h1>this country not exist</h1>
                : <>
                <div>
            <img src={country?.[0].flags.png} alt="" />
        </div>
        <section>
            <h2>{country?.[0].name.common}</h2>

        </section>
                </>
        }
        
    </article>
  )
}

export default CountryInfo