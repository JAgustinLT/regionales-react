import '../css/Navbar.css'
import CartWidget from './CartWidget'



const Navbar = ()=> {
    return(
        <nav className="nav-container">
            <a className="a-nav" href="">
                <img src="../nuezfondant.png" alt="logo" className='logo' />
            </a>
            <a className="a-nav" href="">Nueces</a>
            <a className="a-nav" href="">Dulces en Frascos</a>
            <a className="a-nav" href="">Promociones</a>
            <CartWidget/>
        </nav>
    )
}
export default Navbar