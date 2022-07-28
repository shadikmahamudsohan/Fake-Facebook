import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ConfirmModal = ({ btnName, handleModalData, children }) => {
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
                <Modal.Body>
                    <Modal.Title className="text-center fs-1">Are You Sure</Modal.Title>
                    <div className="d-flex justify-content-center align-items-center my-4">
                        <Button variant="danger" className="me-2" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" className="ms-2" onClick={() => { handleModalData(true); handleClose(); }}>
                            Confirm
                        </Button>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
};

export default ConfirmModal;