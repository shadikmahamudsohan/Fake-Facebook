import React, { useState } from 'react';
import '../CSS/ImageShare.css';
import { IoMdAdd } from 'react-icons/io';
import { AiFillHeart } from 'react-icons/ai';
import { RiDislikeFill } from 'react-icons/ri';
import FormModal from '../Shared/FormModal';
import useDateTime from '../hooks/useDateTime';
import useGet from '../API/useGet';
import Card from 'react-bootstrap/Card';
import auth from '../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const ImageShare = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [uploading, setUploading] = useState(false);
    const [loadAgain, setLoadAgain] = useState(0);
    const [user] = useAuthState(auth);
    const [isLiked, setIsLiked] = useState(false);
    const from = [
        { title: "Give your name", name: "name", type: "text", placeholder: "Your Name" },
        { title: "Give a Image", name: "image", type: "file", placeholder: "User Description", image: true },
    ];
    const [dateTime] = useDateTime();

    const data = useGet({ url: 'imageShare', loadAgain: loadAgain });
    console.log(data);

    const handleModalData = (data) => {
        const details = {
            name: data?.name,
            email: user?.email,
            image: imageUrl,
            updated: dateTime,
            like: 0,
        };
        if (details) {
            fetch(`${process.env.REACT_APP_SERVER_URL}imageShare`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)

            }).then(res => res.json())
                .then(data => {
                    console.log(data);
                    setLoadAgain(loadAgain + 1);
                })
                .catch(err => console.log(err));
        }
    };


    const handleImageUpload = (e) => {
        setUploading(true);
        const image = e.target.files[0];
        const imageStorageKey = 'c15b3e667d12ba20eff0893d10dc93ba';
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                setImageUrl(data?.data?.url);
                setUploading(false);
            });
    };
    return (
        <div>
            <div className='row g-5'>
                {data?.map(({ _id, image, name, updated, email, like }) => (
                    <div key={_id} className="col-12 col-md-6 col-lg-4">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">{updated}</small>
                                <div className="btn-group">
                                    {email === user?.email ?
                                        <button className="btn btn-sm btn-outline-danger" onClick={() => {
                                            fetch(`${process.env.REACT_APP_SERVER_URL}imageShare/${_id}`, {
                                                method: 'DELETE'
                                            }).then(res => res.json())
                                                .then(data => {
                                                    setLoadAgain(loadAgain + 1);
                                                }).catch(err => console.log(err));
                                        }
                                        }>Delete</button> :
                                        <div className="d-flex justify-content-center align-items-center">
                                            <span className="text-danger me-2">{like}</span>
                                            {!isLiked ? <button style={{ width: '40px', height: '40px' }} className="d-flex align-items-center justify-content-center rounded-circle bg-danger p-2 border-1 border border-light"
                                                onClick={() => {
                                                    fetch(`${process.env.REACT_APP_SERVER_URL}imageShare/${_id}`, {
                                                        method: 'PATCH',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({ like: parseInt(like) + 1 })

                                                    }).then(res => res.json())
                                                        .then(data => {
                                                            setLoadAgain(loadAgain + 1);
                                                            setIsLiked(true);
                                                        })
                                                        .catch(err => console.log(err));
                                                }}
                                            >
                                                <AiFillHeart className="text-light" size={40} />
                                            </button> :
                                                <button style={{ width: '40px', height: '40px' }} className="d-flex align-items-center justify-content-center rounded-circle bg-light p-2 border-1 border border-dark"
                                                    onClick={() => {
                                                        fetch(`${process.env.REACT_APP_SERVER_URL}imageShare/${_id}`, {
                                                            method: 'PATCH',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify({ like: parseInt(like) - 1 })

                                                        }).then(res => res.json())
                                                            .then(data => {
                                                                setLoadAgain(loadAgain + 1);
                                                                setIsLiked(false);
                                                            })
                                                            .catch(err => console.log(err));
                                                    }}
                                                >
                                                    <RiDislikeFill className="text-dark" size={40} />
                                                </button>
                                            }
                                        </div>
                                    }
                                </div>
                            </Card.Footer>
                        </Card>
                    </div>
                ))}
            </div>
            <FormModal from={from} handleImageUpload={handleImageUpload} handleModalData={handleModalData} uploading={uploading}>
                <div className="add-button">
                    <IoMdAdd className="add-icon" />
                </div>
            </FormModal>
        </div>
    );
};

export default ImageShare;