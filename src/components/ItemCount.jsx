import {useState} from 'react'

const ItemCount = ({stock}) => {
const [count, setCount]= useState(1)
const [compra, setCompra]=useState(false)

const sumar =()=>{
  if(count<stock){
  setCount(count+1)}
}
const restar =()=>{
  if(count>0){
  setCount(count-1)}
}
const ejecutarCompra =()=>{
  setCompra(!compra)
  

}
  return (
    <>
    <div>
        <button className='btn btn-danger' onClick={restar}>-</button>
        <span className='btn'>{count}</span>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-primary' onClick={ejecutarCompra}>Comprar</button>
  </>
  )
}

export default ItemCount