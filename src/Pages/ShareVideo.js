import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { IoMdAdd } from 'react-icons/io';
import { RiDislikeFill } from 'react-icons/ri';
import useGet from '../API/useGet';
import auth from '../Firebase/firebase.init';
import useDateTime from '../hooks/useDateTime';
import FormModal from '../Shared/FormModal';
import Card from 'react-bootstrap/Card';
import { AiFillHeart } from 'react-icons/ai';
import YouTube, { YouTubeProps } from 'react-youtube';
import { Form } from 'react-bootstrap';

const ShareVideo = () => {
    const [loadAgain, setLoadAgain] = useState(0);
    const [user] = useAuthState(auth);
    const from = [
        { title: "Give your name", name: "name", type: "text", placeholder: "Your Name" },
        { title: "Give a description", name: "description", type: "text", placeholder: "User Description", textarea: true },
        { title: "Give Youtube VideoId", name: "videoId", type: "text", placeholder: "Your Video Id" },
    ];
    const [dateTime] = useDateTime();

    const data = useGet({ url: 'shareVideo', loadAgain: loadAgain });

    const handleModalData = (data) => {
        const details = {
            name: data?.name,
            email: user?.email,
            description: data?.description,
            updated: dateTime,
            videoId: data?.videoId,
            like: 0,
            isLiked: false,
        };
        fetch(`${process.env.REACT_APP_SERVER_URL}shareVideo`, {
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
    };


    const opts = {
        width: '100%',
        height: '200px',
    };
    const [search, setSearch] = useState('');
    const filteredData = data?.filter(user => {
        return user?.name?.toLowerCase().includes(search?.toLowerCase());
    });
    return (
        <div>
            <Form.Control
                type="text"
                id="search"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <h2 className='mb-3'> Share Video </h2>
            <div className='row g-2'>
                {filteredData?.map(({ _id, videoId, name, updated, email, like, isLiked }) => (
                    <div key={_id} className="col-12 col-md-6 col-lg-4">
                        <Card style={{ width: '100%', minHeight: '300px' }}>
                            <Card.Body>
                                <YouTube
                                    videoId={videoId}
                                    opts={opts}
                                    title={name}
                                    loading={<div>Loading...</div>}
                                />
                                <Card.Title>{name}</Card.Title>
                            </Card.Body>
                            <Card.Footer className="d-flex justify-content-between align-items-center">
                                <small className="text-muted">{updated}</small>
                                <div className="btn-group">
                                    {email === user?.email ?
                                        <div className="d-flex justify-content-center align-items-center">
                                            <span className='text-danger me-3'>Likes: {like}</span>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => {
                                                fetch(`${process.env.REACT_APP_SERVER_URL}shareVideo/${_id}`, {
                                                    method: 'DELETE'
                                                }).then(res => res.json())
                                                    .then(data => {
                                                        setLoadAgain(loadAgain + 1);
                                                    }).catch(err => console.log(err));
                                            }
                                            }>Delete</button>
                                        </div> :
                                        <div className="d-flex justify-content-center align-items-center">
                                            <span className="text-danger me-2">{like}</span>
                                            {!isLiked ? <button style={{ width: '40px', height: '40px' }} className="d-flex align-items-center justify-content-center rounded-circle bg-danger p-2 border-1 border border-light"
                                                onClick={() => {
                                                    fetch(`${process.env.REACT_APP_SERVER_URL}shareVideo/${_id}`, {
                                                        method: 'PATCH',
                                                        headers: {
                                                            'Content-Type': 'application/json'
                                                        },
                                                        body: JSON.stringify({ like: parseInt(like) + 1, isLiked: true })

                                                    }).then(res => res.json())
                                                        .then(data => {
                                                            setLoadAgain(loadAgain + 1);
                                                        })
                                                        .catch(err => console.log(err));
                                                }}
                                            >
                                                <AiFillHeart className="text-light" size={40} />
                                            </button> :
                                                <button style={{ width: '40px', height: '40px' }} className="d-flex align-items-center justify-content-center rounded-circle bg-light p-2 border-1 border border-dark"
                                                    onClick={() => {
                                                        fetch(`${process.env.REACT_APP_SERVER_URL}shareVideo/${_id}`, {
                                                            method: 'PATCH',
                                                            headers: {
                                                                'Content-Type': 'application/json'
                                                            },
                                                            body: JSON.stringify({ like: parseInt(like) - 1, isLiked: false })

                                                        }).then(res => res.json())
                                                            .then(data => {
                                                                setLoadAgain(loadAgain + 1);
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
            <FormModal from={from} handleModalData={handleModalData} required={true}>
                <div className="add-button">
                    <IoMdAdd className="add-icon" />
                </div>
            </FormModal>
        </div>
    );
};

export default ShareVideo;