import React, { useState } from 'react';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import useGetRerender from '../API/useGetReRander';

const SidebarComponent = ({ isOpen }) => {
    const [search, setSearch] = useState('');
    const allUser = useGetRerender({ url: 'user' });
    const navigate = useNavigate();

    const filteredName = allUser?.filter(user => {
        return user?.name?.toLowerCase().includes(search?.toLowerCase());
    });

    return (
        <ProSidebar collapsed={isOpen} style={{ height: "100vh", overflow: 'hidden' }}>
            <Menu iconShape="circle">
                <div>
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
                        {filteredName?.map(({ _id, name, photo, email }) => (
                            <>
                                {!photo ? photo = 'https://via.placeholder.com/150' : null}
                                <MenuItem
                                    icon={<img src={photo} alt={name} style={{ width: "30px", height: "30px", borderRadius: "50%" }} />}
                                    key={_id}
                                    onClick={() => { navigate(`/inbox/${email}`); }}
                                >
                                    {name}
                                </MenuItem >
                            </>
                        ))}
                    </div>
                </div>
            </Menu>
        </ProSidebar>
    );
};

export default SidebarComponent;