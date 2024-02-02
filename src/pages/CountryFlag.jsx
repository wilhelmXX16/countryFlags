import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import FormCountry from '../components/Countries/FormCountry'
import Card from '../components/Countries/Card'

const CountryFlag = () => {

  const [formUrl,setFormUrl] = useState('https://restcountries.com/v3.1/all')

  const { userName } = useSelector(state => state)

  return (
    <div>
      <p><span>Welcome {userName}</span></p>
      <FormCountry setFormUrl={setFormUrl}/>
      <Card formUrl={formUrl}/>
    </div>
  )
}

export default CountryFlag