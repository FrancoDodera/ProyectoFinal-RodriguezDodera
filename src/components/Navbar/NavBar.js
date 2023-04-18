import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import {Link, NavLink} from "react-router-dom";

function NavBar() {
    return (
        <>
            <Navbar bg="" variant="dark" className='fondo-nav'>
                <Container id='navbarContainer'>
                    <Link to={"/"} className='navbar-brand'><img src='/logo192.png' alt='lol' width={100}/></Link>
                    <Nav className="me-auto">
                        <ul>
                            <li className='lista-navbar'>
                                <NavLink className='nav-link text-ligth' to={"/category/luchador"}>Luchador</NavLink>
                            </li>
                            <li className='lista-navbar'>
                                <NavLink className='nav-link text-ligth' to={"/category/asesino"}>Asesino</NavLink>
                            </li>
                            <li className='lista-navbar'>
                                <NavLink className='nav-link text-ligth' to={"/category/mago"}>Mago</NavLink>
                            </li>
                            <li className='lista-navbar'>
                                <NavLink className='nav-link text-ligth' to={"/category/tirador"}>Tirador</NavLink>
                            </li>
                            <li className='lista-navbar'>
                                <NavLink className='nav-link text-ligth' to={"/category/tanque"}>Tanque</NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Container>
                <CartWidget/>
            </Navbar>
        </>
    )
}
export default NavBar