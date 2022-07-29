import React, { useEffect, useState } from 'react';
import LayOut from '../Components/LayOut/LayOut';
import Card from 'react-bootstrap/Card';
import FromComponent from '../Components/FromComponent';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase/firebase.init';
import useGetRerender from '../API/useGetReRander';

const UpdateProfile = () => {
    const [ifLoading, setIfLoading] = useState(false);
    const [imageData, setImageData] = useState(null);
    const [userImage, setUserImage] = useState('');
    const [details, setDetails] = useState({});
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
        console.log(image);
        alert("Image Uploaded start");
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
                    setUserImage(data?.data?.url);
                    setIfLoading(false);
                    if (user?.email) {
                        fetch(`http://localhost:5000/user/${user?.email}`, {
                            method: 'PATCH',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ photo: data?.data?.url })

                        }).then(res => res.json())
                            .then(data => {
                                alert("Image Updated");
                            })
                            .catch(err => console.log(err));
                    }
                }
            });
    };

    const handleValue = (value) => {
        // setImageFile(value?.image);
        const details = {
            name: value?.name,
            description: value?.description,
        };
        setDetails(details);
        if (value?.image) {
            setImageData(value.image);
        }

        if (user?.email) {
            fetch(`http://localhost:5000/user/${user?.email}`, {
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
        <LayOut>
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
                    </Card>
                </div>
            </div>
        </LayOut>
    );
};

export default UpdateProfile;