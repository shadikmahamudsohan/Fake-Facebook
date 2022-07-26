import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Header = () => {
    const links = [
        { id: 1, href: '/', text: 'Home' },
        { id: 2, href: '/about', text: 'About' },
        { id: 3, href: '/contact', text: 'Contact' },
        { id: 4, href: '/login', text: 'Login' },
        { id: 5, href: '/register', text: 'Register' },
    ];
    return (
        <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">Fake-FaceBook</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {
                            links.map(({ id, href, text }) => (
                                <Nav.Link key={id} href={href}>{text}</Nav.Link>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;