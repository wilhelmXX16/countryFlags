import React from 'react'
import { useSelector } from 'react-redux'
import FormCountry from '../components/Countries/FormCountry'
import Card from '../components/Countries/Card'

const CountryFlag = () => {

  const { userName } = useSelector(state => state)

  

  return (
    <div>
      <p><span>Welcom {userName}</span></p>
      <FormCountry />
      <Card />
    </div>
  )
}

export default CountryFlag