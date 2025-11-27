import React, { useState } from 'react'
import ItemCount from './ItemCount'
// importo el hook para usar el contexto
import { useContext } from 'react'

// importo el contexto que quiero usar
import { CartContext } from '../context/CartContext'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ItemDetail = ({detalle}) => {
  // const contexto = useContext(CartContext)
  const {cart, addItem, itemQuantity} = useContext(CartContext)
  const [quantityAdded, setQuantityAdded]= useState(0)
  console.log(cart)

  const onAdd = (cantidad)=>{
    console.log(`Agregaste ${cantidad} al carrito`)
    addItem(detalle, cantidad)
    setQuantityAdded(cantidad)

  }
  const stockActualizado = detalle.stock - itemQuantity(detalle.id)
  return (
    <div style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center', flexWrap:'wrap'}}>
        <h1>Detalle de : {detalle.name}</h1>
        <img src={detalle.img} alt={detalle.name} />
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <p>STOCK DISPONIBLE: {stockActualizado}</p>
        {quantityAdded !== 0 ? <Link className='btn btn-dark' to='/cart'>Terminar Compra</Link> :  <ItemCount stock={stockActualizado} onAdd={onAdd}/>}

    </div>
  )
}

export default ItemDetail