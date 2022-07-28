import React from 'react';
import { useParams } from 'react-router-dom';
import useGet from '../API/useGet';

const Inbox = () => {
    const { id } = useParams();
    const user = useGet({ url: 'user', id });
    console.log(user);
    return (
        <div>
            This is the inbox for: {user?.name}
        </div>
    );
};

export default Inbox;