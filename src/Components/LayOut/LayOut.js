import React from 'react';
import Header from '../../Shared/Header';
import SidebarComponent from '../Sidebar';

const LayOut = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div style={{ minHeight: "100vh" }}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='d-flex' style={{ minHeight: "90vh" }}>
                <SidebarComponent isOpen={isOpen} />
                <div className='w-100 container mx-auto p-5'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayOut;