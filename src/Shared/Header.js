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
import useGetRerender from '../API/useGetReRander';
const Header = ({ isOpen, setIsOpen }) => {
    const [user] = useAuthState(auth);
    const [ifLogOut, setIfLogOut] = useState(false);
    const links = [
        { id: 1123123, href: '/', text: 'Home' },
        { id: 1342341, href: '/imageShare', text: 'ImageShare' },
        { id: 3413541341, href: '/updateProfile', text: 'Update' },
    ];
    //send user data to server
    // useEffect(() => {
    //     const userData = {
    //         name: user?.displayName,
    //         email: user?.email,
    //         photo: user?.photoURL,
    //     };
    //     if (user) {
    //         fetch(`${process.env.REACT_APP_SERVER_URL}user/${user.email}`, {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-type': 'application/json; charset=UTF-8',
    //             },
    //             body: JSON.stringify(userData)
    //         }).then(res => res.json())
    //             .catch(err => console.log(err));
    //     }
    // }, [user]);

    const handleLogout = () => {
        auth.signOut();
    };
    if (ifLogOut) {
        handleLogout();
        setIfLogOut(false);
    }

    const userData = useGetRerender({ url: 'user', id: user?.email });

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <button onClick={() => setIsOpen(!isOpen)} className='p-2 px-3 rounded-3 me-5 bg-dark text-light border-light border'>
                    {isOpen ? <IoMdClose size={30} className='text-light' /> : <HiMenu size={30} className='text-light' />}
                </button>
                <Navbar.Brand as={Link} to="/" className="fw-bold">Fake-Social-Media</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        {
                            links.map(({ id, href, text }) => (
                                <Nav.Link key={id} as={Link} to={href}>{text}</Nav.Link>
                            ))
                        }
                        {!user ?
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            :
                            <Nav.Link>
                                <ConfirmModal btnName="Log Out" handleModalData={setIfLogOut}>Log Out</ConfirmModal>
                            </Nav.Link>}
                    </Nav>
                    {(user?.photoURL) && <>
                        {userData?.photo ? <img src={userData?.photo} alt="user" className="rounded-circle border border-light border-2 ms-3" style={{ width: '50px', height: '50px' }} /> :
                            <img className="rounded-circle border border-light border-2 ms-3" style={{ width: "50px" }} alt="User"
                                src={user?.photoURL}></img>
                        }
                    </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;