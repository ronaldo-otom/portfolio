import React from 'react';
import './layout.css';
import {Navbar, Nav} from 'react-bootstrap'

function NavbarLayout() {
    return (
        <Navbar className="navbar" expand="sm" variant="dark">
            <Navbar.Brand href="#home">ronix</Navbar.Brand>
            <Nav className="mr-auto" />
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#skills">Skills</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contacts">Contact</Nav.Link>
            </Nav>    
        </Navbar>
    )
}

export default NavbarLayout
