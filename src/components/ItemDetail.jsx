import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({detalle}) => {
  return (
    <div>
        <h1>Detalle de : {detalle.name}</h1>
        <img src={detalle.img} alt={detalle.name} />
        <p>{detalle.description}</p>
        <p>${detalle.price},00</p>
        <p>STOCK DISPONIBLE: {detalle.stock}</p>
        <ItemCount stock={detalle.stock}/>
    </div>
  )
}

export default ItemDetail