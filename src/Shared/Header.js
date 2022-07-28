import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../Firebase/firebase.init';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import ConfirmModal from './ConfirmModal';
const Header = ({ isOpen, setIsOpen }) => {
    const [user] = useAuthState(auth);
    const [ifLogOut, setIfLogOut] = useState(false);
    const links = [
        { id: 1, href: '/', text: 'Home' },
        { id: 2, href: '/about', text: 'About' },
        { id: 3, href: '/contact', text: 'Contact' },
        { id: 4, href: '/login', text: 'Login' },
        { id: 5, href: '/register', text: 'Register' },
    ];
    //send user data to server

    useEffect(() => {
        const userData = {
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
        };
        if (user) {
            fetch(`http://localhost:5000/user/${user.email}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(userData)
            }).then(res => res.json())
                .then(data => console.log(data))
                .catch(err => console.log(err));
        }
    }, [user]);
    const handleLogout = () => {
        auth.signOut();
    };
    if (ifLogOut) {
        handleLogout();
        setIfLogOut(false);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <button onClick={() => setIsOpen(!isOpen)} className='p-2 px-3 rounded-3 me-5 bg-dark text-light border-light border'>
                    {isOpen ? <IoMdClose size={30} className='text-light' /> : <HiMenu size={30} className='text-light' />}
                </button>
                <Navbar.Brand as={Link} to="/" className="fw-bold">Fake-Messenger</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {
                            links.map(({ id, href, text }) => (
                                <Nav.Link key={id} as={Link} to={href}>{text}</Nav.Link>
                            ))
                        }
                        {user && <Nav.Link><ConfirmModal btnName="Log Out" handleModalData={setIfLogOut}>Log Out</ConfirmModal></Nav.Link>}
                    </Nav>
                    {user?.photoURL && <img class="rounded-circle border border-light border-2 ms-3" style={{ width: "50px" }} alt="50x50"
                        src={user?.photoURL} data-holder-rendered="true"></img>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;