import React from 'react';
import { useEffect } from 'react';
import useFetch from '../../hooks/UseFetch';
import FlagCard from './FlagCard';



const Card = ({formUrl}) => {

  //const url = 'https://restcountries.com/v3.1/all'
  const [countries, getAllCountries] = useFetch(formUrl)

  useEffect(() => {
    getAllCountries()
  }, [formUrl])
  
  // console.log(countries)

  return (
    <div className='country__container'>
      {
        countries?.map(country => (
            <FlagCard 
                key={country.name.common}
                flag={country}/>
        ))
      }
    </div>
  )
}

export default Card