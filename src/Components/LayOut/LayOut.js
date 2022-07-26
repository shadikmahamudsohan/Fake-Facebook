import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';

const LayOut = ({ children }) => {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Header />
            <Container style={{ minHeight: "90vh" }} className="my-3">
                {children}
            </Container>
            <Footer />
        </div>
    );
};

export default LayOut;