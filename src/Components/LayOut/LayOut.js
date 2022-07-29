import React from 'react';
import Header from '../../Shared/Header';
import SidebarComponent from '../Sidebar';

const LayOut = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div style={{ height: "100vh", overflowY: 'hidden' }}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='d-flex'>
                <SidebarComponent isOpen={isOpen} />
                <div style={{ height: "100vh", overflowY: 'scroll', width: "100%" }} className='w-100 container mx-auto p-5'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayOut;