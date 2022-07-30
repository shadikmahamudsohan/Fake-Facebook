import React from 'react';
import FromComponent from '../Components/FromComponent';

const AddProducts = () => {
    const from = [
        { title: "Give a Title", name: "title", type: "text", placeholder: "Your Title" },
        { title: "Give a description", name: "Description", type: "text", placeholder: "User Description", textarea: true },
    ];

    const handleValue = (value) => {
        fetch(`${process.env.REACT_APP_SERVER_URL}post`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)

        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    };
    return (
        <div>
            <FromComponent AllFrom={from} handleValue={handleValue} />
        </div>
    );
};

export default AddProducts;