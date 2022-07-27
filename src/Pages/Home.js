import React, { useEffect, useState } from 'react';
import useGet from '../API/useGet';
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
                < AddProducts />
            </LayOut>
        </div >
    );
};

export default Home;