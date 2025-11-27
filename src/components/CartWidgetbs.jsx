
import { BiCartAdd } from "react-icons/bi";
import { Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidgetbs = () => {
    const {cartQuantity, cart}= useContext(CartContext)
    return (
        <>
        <BiCartAdd fontSize={'1.5rem'}/>
        {cart.length > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
        </>
    )
}

export default CartWidgetbs