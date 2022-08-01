import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header';
import SidebarComponent from '../Sidebar';
import getWindowDimensions from '../../hooks/getWindowDimensions';
const LayOut = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { width } = getWindowDimensions();
    useEffect(() => {
        if (width < 768) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [setIsOpen, width]);


    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='d-flex'>
                <SidebarComponent isOpen={isOpen} setIsOpen={setIsOpen} />
                <div style={{ height: '100vh', overflowY: 'scroll', width: '100vw' }} className={`mx-auto ${(width > 768) ? "p-5" : "p-1"}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default LayOut;