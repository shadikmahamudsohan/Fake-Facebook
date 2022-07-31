import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FromComponent from '../Components/FromComponent';

const FormModal = ({ handleModalData, from, handleImageUpload, children, uploading, required }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div onClick={handleShow}>
                {children}
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!required ?
                        <>
                            <FromComponent AllFrom={from} handleValue={handleModalData} handleImageUpload={handleImageUpload} required={false} disabled={uploading} handleClose={handleClose} />
                            {uploading ? <div className="text-center">Image is uploading...</div> : null}
                        </>
                        :
                        <>
                            <FromComponent AllFrom={from} handleValue={handleModalData} handleImageUpload={handleImageUpload} required={true} disabled={uploading} handleClose={handleClose} />
                            {uploading ? <div className="text-center">Image is uploading...</div> : null}
                        </>
                    }

                </Modal.Body>
            </Modal>
        </>
    );
};

export default FormModal;