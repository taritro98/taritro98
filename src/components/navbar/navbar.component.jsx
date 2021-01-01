import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../../assets/icons/logo.png'
import './navbar.style.css'

export const MyNavbar = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" className="animate-navbar nav-theme justify-content-between">
                <Navbar.Brand href="#home">
                    <img className="logo" src={Logo} alt=""/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar;