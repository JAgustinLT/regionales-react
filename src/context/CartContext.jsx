// logica del carrito
import { createContext, useState } from "react";

// creamos el contexto y lo exportamos para su uso
export const CartContext = createContext()


export const CartProvider = ({children})=>{
    const [cart, setCart]=useState([])
    // todas las funcionalidades que modifiquen el carrito
    // agregar un elemento al carrito
    const addItem =(item, qty)=>{
        if(isInCart(item.id)){
        
        setCart(
            cart.map((prod)=> {
                if(prod.id === item.id){
                    //actualizar
                    return {...prod, quantity: prod.quantity + qty}
                }else{
                    return prod
                }
            })
        )

    }else{
        //no existe en el carrito, lo agrego
        setCart([...cart, {...item, quantity:qty}])
    }}

    // elimina un elemento del carrito
    const removeItem =(id)=>{
        setCart(cart.filter((prod)=> prod.id !== id))

    }

    // borra todo del carrito
    const clear =()=>{
        setCart([])

    }

    // devuelve un bool si exite o no el item en el carrito
    const isInCart =(id)=>{
        return cart.some((prod)=> prod.id === id)

    }

    const total = ()=>{
        return cart.reduce((acc, prod)=>(acc += prod.quantity * prod.price), 0)
    }

    const cartQuantity = ()=> {
        return cart.reduce((acc, prod)=> acc += prod.quantity, 0)
    }

    const itemQuantity = (id)=>{
        const itemInCart = cart.find((prod)=> prod.id === id)

        if(itemInCart){
            return itemInCart.quantity
        }else{
            return 0
        }


    }
    
    
    return(
        <CartContext.Provider value={{cart,addItem, removeItem, clear, isInCart, total, cartQuantity, itemQuantity}}>
            {children}

        </CartContext.Provider>
    )
}