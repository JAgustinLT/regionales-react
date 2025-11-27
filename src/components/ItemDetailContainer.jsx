import React, { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncService'
import ItemDetail from './ItemDetail'
import { Link, useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const [cargando, setCargando] = useState(false)
    const [invalid, setInvalid]= useState(null)
    const {id}=useParams()
    // const param = useParams()

    //FIREBASE

    useEffect(()=>{
      setCargando(true)

      const docRef = doc(db, 'productos', id)
      //traer el documento
      getDoc(docRef)
      .then((res)=>{
        if(res.data()){
          setDetalle({id:res.id, ...res.data()})

        }else{
          setInvalid(true)
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=> setCargando(false))


    },[id])


    // useEffect(()=>{
    //   setCargando(true)
    //     //llamar la promise
    //     getOneProduct(id)
    //     .then((res)=> setDetalle(res))
    //     .catch((error)=> console.log(error))
    //     .finally(()=>setCargando(false))
    // }, [id])

    if(invalid){
      return <div>
        <h1> El Producto no EXISTE</h1>
        <Link className='btn btn-dark' to='/'> Volver a Pag. Principal</Link>
      </div>
    }
  return (
  <>
   {cargando ? <LoaderComponent/> : <ItemDetail detalle={detalle}/>}
  </>
    
  )
}

export default ItemDetailContainer