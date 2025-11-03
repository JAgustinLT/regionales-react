import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1>Error : No se encuentra la ruta</h1>
        <Link className='btn btn-danger' to='/'> Volver a la pagina principal</Link>    
    </div>
  )
}

export default Error