import React, { useEffect } from 'react'
import useFetch from '../../hooks/UseFetch'
import './style/flagsCard.css'

const FlagCard = ({ flag }) => {

    // const [country, getCountryById] = useFetch(flag)

    // useEffect (() => {
    //     getCountryById()
    // })

    //console.log(flag)
  return (
    <article className='country'>
        <header className='country__header'>
            <img className='flag' src={flag.flags.png} alt={flag.name.common} />
        </header>
        <section className='country__body'>
            <h2 className='country__name'>{flag.name.common}</h2>
            <p className='country__info'>Population: <span className='country__data'>{flag.population}</span></p>
            <p className='country__info'>Region: <span className='country__data'>{flag.region}</span></p>
            <p className='country__info'>Capital: <span className='country__data'>{flag.capital}</span></p>
        </section>
    </article>
  )
}

export default FlagCard