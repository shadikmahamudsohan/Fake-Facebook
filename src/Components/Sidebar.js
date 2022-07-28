import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaGem } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import useGet from '../API/useGet';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const SidebarComponent = ({ isOpen }) => {
    const [search, setSearch] = useState('');
    const allUser = useGet({ url: 'user' });
    const navigate = useNavigate();

    const filteredName = allUser?.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filteredName);

    return (
        <ProSidebar collapsed={isOpen} height="100px">
            <Menu iconShape="circle">
                <div style={{ minHeight: "90vh" }}>
                    {/* <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu> */}
                    <MenuItem icon={<FaSearch />}>
                        <Form.Control
                            type="text"
                            id="search"
                            placeholder="Search"
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </MenuItem>
                    <div>
                        {filteredName?.map(({ _id, name, photo }) => (
                            <MenuItem
                                icon={<img src={photo} alt={name} style={{ width: "30px", height: "30px", borderRadius: "50%" }} />}
                                key={_id}
                                onClick={() => { navigate(`/inbox/${_id}`); }}
                            >
                                {name}
                            </MenuItem >
                        ))}
                    </div>
                </div>
            </Menu>
        </ProSidebar>
    );
};

export default SidebarComponent;