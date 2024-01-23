import React from 'react';



const Card = ({flag}) => {
  return (
    <div className='country'>
      <img className='flag' src={flag.flags.png} alt="flag" />
      <h3 className='name'>{flag.name.common}</h3>
      <p className='description'>Population:<span>{flag.population}</span></p>
      <p className='description'>Region:<span>{flag.region}</span></p>
      <p className='description'>CApital:<span>{flag.capital}</span></p>
    </div>
  )
}

export default Card