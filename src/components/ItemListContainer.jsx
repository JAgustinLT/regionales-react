import { useEffect, useState } from "react"
import { getProductos } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer =(props)=>{
    const[data, setData]=useState([])
    const {type}= useParams()
    

    useEffect(()=>{
        getProductos()
        .then((res)=> {
            if(type){
                setData(res.filter((prod)=> prod.category === type))
            }else{
                setData(res)
            }
        })
        .catch((error)=> console.log(error))
    },[type])
    return(
        <div>
            <h1>{props.regionales}</h1>
            {/* {data.map((prod, index)=> <p key={prod.id}>{prod.name}</p>)} */}
            <ItemList data={data}/>

        </div>
    )
}

export default ItemListContainer