import React, { useEffect, useState } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FaHeart, FaSearch } from 'react-icons/fa';
import { SiGooglemessages } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import useGetRerender from '../API/useGetReRander';
import { BsImageFill } from 'react-icons/bs';
import { MdOndemandVideo } from 'react-icons/md';
import { FaFolderOpen } from 'react-icons/fa';

const SidebarComponent = ({ isOpen, setIsOpen }) => {
    const [search, setSearch] = useState('');
    const allUser = useGetRerender({ url: 'user' });
    const navigate = useNavigate();

    const filteredName = allUser?.filter(user => {
        return user?.name?.toLowerCase().includes(search?.toLowerCase());
    });



    const links = [
        { id: 1342341, href: '/imageShare', text: 'ImageShare', icon: <BsImageFill /> },
        { id: 111111123, href: '/shareVideo', text: 'ShareVideo', icon: <MdOndemandVideo /> },
        { id: 12221123, href: '/document', text: 'document', icon: <FaFolderOpen /> },
    ];



    return (
        <ProSidebar collapsed={isOpen} style={{ height: "100vh", overflow: 'hidden' }}>
            <Menu iconShape="circle">
                <div>
                    {/* <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu> */}

                    <SubMenu title="Message" icon={<SiGooglemessages />}>
                        <MenuItem icon={<FaSearch />}>
                            <Form.Control
                                type="text"
                                id="search"
                                placeholder="Search"
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </MenuItem>
                        {filteredName?.map(({ _id, name, photo, email }) => (
                            <div key={_id} onClick={() => { navigate(`/inbox/${email}`); }}>
                                {!photo ? photo = 'https://via.placeholder.com/150' : null}
                                <MenuItem
                                    icon={<img src={photo} alt={name} style={{ width: "30px", height: "30px", borderRadius: "50%" }} />}
                                >
                                    {name}
                                </MenuItem >
                            </div>
                        ))}
                    </SubMenu>
                    {
                        links.map(({ id, href, text, icon }) => (
                            <MenuItem key={id} onClick={() => {
                                navigate(href);
                            }} icon={icon}>
                                {text}
                            </MenuItem>
                        ))
                    }


                </div>
            </Menu>
        </ProSidebar>
    );
};

export default SidebarComponent;