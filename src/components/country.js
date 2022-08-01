import React from 'react'
import { countriesData } from '../data/countries'

const Country=({name,capital,flag,population,currency})=>{
  const length=countriesData.length
    return(
      <div className='user-card' >
        <img src={flag} alt={name}/>
        <h2>{name}</h2>
        <h3><b>Capital:</b>{capital}</h3>
        <h3><b>Population:</b>{population}</h3>
        <h3><b>Currency:</b>{currency}</h3><br/>
        <h4><b>There is almost </b>{length} <b>Countries in The World</b></h4>
      </div>
    )
  }
  export default Country