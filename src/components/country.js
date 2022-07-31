import React from 'react'

const Country=({name,capital,flag,population,currency})=>{
    return(
      <div className='user-card' >
        <img src={flag} alt={name}/>
        <h2>{name}</h2>
        <h3><b>Capital:</b>{capital}</h3>
        <h3><b>Population:</b>{population}</h3>
        <h3><b>Currency:</b>{currency}</h3>
  
      </div>
    )
  }
  export default Country