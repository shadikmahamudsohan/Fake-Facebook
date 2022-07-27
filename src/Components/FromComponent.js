import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const FromComponent = ({ AllFrom, handleValue }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formValues = {};
        AllFrom.map(({ name }) => {
            return formValues[name] = e.target[name].value;
        });
        handleValue(formValues);
    };
    return (
        <Form onSubmit={handleSubmit}>
            {AllFrom?.map((from, index) => (
                <Form.Group key={index} className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{from.title}</Form.Label>
                    {!from.textarea ?
                        <Form.Control type={from.type} name={from.name} placeholder={from.placeholder} required />
                        : <Form.Control as="textarea" rows="3" name={from.name} placeholder={from.placeholder} required />}
                </Form.Group>

            ))}
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

    );
};

export default FromComponent;