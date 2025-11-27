import { useEffect, useState } from "react"
import { getProductos, productos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, where, query, addDoc  } from "firebase/firestore"
import { db } from "../service/firebase"


const ItemListContainer =(props)=>{
    const[data, setData]=useState([])
    const [loader, setLoader]= useState(false)
    const {type}= useParams()

//FIREBASE
useEffect(()=>{
    setLoader(true)
    //conectarnos con nuestra coleccion
    const productCollection = type 
    ? query(collection(db, 'productos'), where('category', '==', type))
     :collection(db, 'productos')
    //pedir los documents
    getDocs(productCollection)
    .then((res)=>{
        // console.log(res.docs)
        // limpiar y optener datos
        const list = res.docs.map((doc)=>{
            return {
                id:doc.id,
                ...doc.data()
            }
        })
        setData(list)
        
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoader(false))
},[type])
    
//PROMESA
    // useEffect(()=>{
    //     setLoader(true)
    //     getProductos()
    //     .then((res)=> {
    //         if(type){
    //             setData(res.filter((prod)=> prod.category === type))
    //         }else{
    //             setData(res)
    //         }
    //     })
    //     .catch((error)=> console.log(error))
    //     .finally(()=> setLoader(false))
    // },[type])


    return(
        <>
        
        {
            loader
            ? <LoaderComponent/>
            :<div>
            <h1>{props.regionales}</h1>
            {/* {data.map((prod, index)=> <p key={prod.id}>{prod.name}</p>)} */}
            <ItemList data={data}/>

        </div>
        }
        </>
        
    )
}

export default ItemListContainer