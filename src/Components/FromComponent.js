import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const FromComponent = ({ AllFrom, handleValue, disabled, handleImageUpload, required, defaultValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = {};
        AllFrom.map(({ name }) => {
            if (name !== "image") {
                return formValues[name] = e.target[name].value;
            } else {
                return formValues[name] = e.target[name].files[0];
            }
        });
        handleValue(formValues);
    };

    return (
        <Form onSubmit={handleSubmit}>
            {AllFrom?.map((from, index) => (
                <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{from.title}</Form.Label>
                    {
                        required ?
                            <>
                                {!from.textarea ?
                                    <>
                                        {!from.image ?
                                            <>
                                                {defaultValue ? <Form.Control defaultValue={defaultValue?.[from?.name]} type={from.type} name={from.name} placeholder={from.placeholder} required />
                                                    : <Form.Control type={from.type} name={from.name} placeholder={from.placeholder} required />}
                                            </>
                                            : <Form.Control type={from.type} name={from.name} placeholder={from.placeholder} onChange={(e) => {
                                                handleImageUpload(e);
                                            }} required />
                                        }
                                    </>
                                    :
                                    <>
                                        {defaultValue ? <Form.Control as="textarea" rows="3" defaultValue={defaultValue?.[from?.name]} name={from.name} placeholder={from.placeholder} required />
                                            : <Form.Control as="textarea" rows="3" name={from.name} placeholder={from.placeholder} required />}
                                    </>}
                            </>
                            :
                            <>
                                {!from.textarea ?
                                    <>
                                        {!from.image ?
                                            <>
                                                {defaultValue ? <Form.Control defaultValue={defaultValue?.[from?.name]} type={from.type} name={from.name} placeholder={from.placeholder} />
                                                    : <Form.Control type={from.type} name={from.name} placeholder={from.placeholder} />}
                                            </>
                                            : <Form.Control type={from.type} name={from.name} placeholder={from.placeholder} onChange={(e) => {
                                                handleImageUpload(e);
                                            }} />
                                        }
                                    </>
                                    :
                                    <>
                                        {defaultValue ? <Form.Control as="textarea" rows="3" defaultValue={defaultValue?.[from?.name]} name={from.name} placeholder={from.placeholder} />
                                            : <Form.Control as="textarea" rows="3" name={from.name} placeholder={from.placeholder} />}
                                    </>}
                            </>
                    }
                </Form.Group>

            ))}
            <Button variant="primary" disabled={disabled} type="submit">
                Submit
            </Button>
        </Form>

    );
};

export default FromComponent;