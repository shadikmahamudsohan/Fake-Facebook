import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useGetReRander from '../API/useGetReRander';
import LayOut from '../Components/LayOut/LayOut';
import AddProducts from './AddProducts';

const Home = () => {
    // const [data, setData] = React.useState(null);
    // const getData = useGet({ url: 'post' });

    return (
        <div>
            {/* {
                getData?.map(({ id, title, description }) => (
                    <p key={id}>{title}</p>
                ))
            } */}
            < LayOut >
                <Outlet />
            </LayOut>
        </div >
    );
};

export default Home;