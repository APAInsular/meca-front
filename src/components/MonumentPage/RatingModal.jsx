import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RatingModal = ({ show, handleClose, rating, setRating, handleSubmit }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Rate Monument</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center">
                    {[1, 2, 3, 4, 5].map(star => (
                        <span
                            key={star}
                            style={{ cursor: 'pointer', fontSize: '2em', color: rating >= star ? '#ffc107' : '#e4e5e9' }}
                            onClick={() => setRating(star)}
                        >
                            ★
                        </span>
                    ))}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default RatingModal;
