import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
        <h1>Tu Carrito esta Vacio</h1>
        <h3>Te Invitamos a que veas Nuestros Productos</h3>
        <Link className='btn btn-dark' to='/'>Ir a Pagina principal</Link>
    </div>
  )
}

export default EmptyCart