import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Documents = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Documents</h1>
            <div onClick={() => navigate("/create-document")} className="add-button">
                <IoMdAdd className="add-icon" />
            </div>
        </div>
    );
};

export default Documents;