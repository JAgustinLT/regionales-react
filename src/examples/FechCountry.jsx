import React from 'react'

const FechCountry = () => {
    fetch('https://restcountries.com/v3.1/name/argentina')
    .then((res)=>res.json()) //traduci,os para poder entenderlo
    .then((data)=>console.log(data))
  return (
    <div>FechCountry</div>
  )
}

export default FechCountry