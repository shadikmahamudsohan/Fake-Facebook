import React, { useEffect, useState } from 'react';
import LayOut from '../Components/LayOut/LayOut';
import Card from 'react-bootstrap/Card';
import FromComponent from '../Components/FromComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import useGetRerender from '../API/useGetReRander';

const UpdateProfile = () => {
    const [ifLoading, setIfLoading] = useState(false);
    const [user] = useAuthState(auth);
    const from = [
        { title: "Give your name", name: "name", type: "text", placeholder: "Your Name" },
        { title: "Take about your self", name: "description", type: "text", placeholder: "Short Description", textarea: true },
        { title: "Give a Image", name: "image", type: "file", placeholder: "User Description", image: true },
    ];

    const userData = useGetRerender({ url: 'user', id: user?.email });

    const handleImageUpload = (e) => {
        console.log(e);
        const image = e.target.files[0];
        const imageStorageKey = 'c15b3e667d12ba20eff0893d10dc93ba';
        const formData = new FormData();
        setIfLoading(true);
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIfLoading(false);
                    if (user?.email) {
                        fetch(`${process.env.REACT_APP_SERVER_URL}user/${user?.email}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ photo: data?.data?.url })

                        }).then(res => res.json())
                            .then(data => {
                                console.log("Image Updated");
                            })
                            .catch(err => console.log(err));
                    }
                }
            });
    };

    const handleValue = (value) => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + '//' + time;
        console.log(dateTime);
        const details = {
            name: value?.name,
            description: value?.description,
            updated: dateTime,
        };

        if (user?.email) {
            fetch(`${process.env.REACT_APP_SERVER_URL}user/${user?.email}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(details)

            }).then(res => res.json())
                .then(data => {
                    console.log("Profile Updated");
                })
                .catch(err => console.log(err));
        }
    };
    return (
        <div className="row">
            <div className="col-md-6">
                <Card style={{ maxWidth: '30rem' }}>
                    <Card.Body>
                        <Card.Title>Update Profile</Card.Title>
                        <Card.Text>
                            <FromComponent AllFrom={from} handleValue={handleValue} disabled={ifLoading} handleImageUpload={handleImageUpload} required={false} defaultValue={userData} />
                        </Card.Text>
                        {ifLoading && <div>Image uploading...</div>}
                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-6">
                <Card style={{ maxWidth: '30rem' }}>
                    <Card.Body>
                        <Card.Title>{userData?.name}</Card.Title>
                        <Card.Text>
                            <img src={userData?.photo} alt="user" style={{ width: '100%' }} />
                        </Card.Text>
                        <Card.Text>
                            {userData?.description}
                        </Card.Text>
                    </Card.Body>
                    {userData?.updated && <Card.Footer>Last updated: {userData?.updated}</Card.Footer>}
                </Card>
            </div>
        </div>
    );
};

export default UpdateProfile;