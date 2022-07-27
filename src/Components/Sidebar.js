import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

const SidebarComponent = ({ isOpen }) => {
    return (
        <ProSidebar collapsed={isOpen} height="100px">

            <Menu iconShape="round">
                <div style={{ minHeight: "90vh" }}>
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </div>
            </Menu>
        </ProSidebar>
    );
};

export default SidebarComponent;