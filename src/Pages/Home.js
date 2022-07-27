import React from 'react';
import LayOut from '../Components/LayOut/LayOut';
import AddProducts from './AddProducts';

const Home = () => {
    return (
        <div>
            <LayOut>
                {/* <h1>Hello world</h1> */}
                <AddProducts />
            </LayOut>
        </div>
    );
};

export default Home;