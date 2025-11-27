import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetbs from './CartWidgetbs';
import { NavLink } from 'react-router-dom';


function Navbarbs() {
return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand as={NavLink} to='/'>
            <img src="../nuezfondant.png" alt="logo" style={{width: '8rem'}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to='/category/Nueces Confitadas'>Nueces Confitadas</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/category/Dulces Envasados'>
                Dulces Envasados
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={NavLink} to='/category/Nueces Chocolate'>Nueces Chocolate</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <CartWidgetbs/>
        </Navbar.Collapse>
        
    </Container>
    </Navbar>
    );
}

export default Navbarbs;