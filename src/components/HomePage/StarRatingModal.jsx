import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const StarRatingModal = ({ show, onHide, onSelectRating }) => {
    const handleStarClick = (starIndex) => {
        onSelectRating(starIndex + 1);
        onHide();
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span
                    key={i}
                    onClick={() => handleStarClick(i)}
                    style={{ cursor: 'pointer' }}
                >
                    ★
                </span>
            );
        }
        return stars;
    };

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Selecciona tu valoración</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ textAlign: 'center' }}>
                    {renderStars()}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default StarRatingModal;
