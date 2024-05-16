import React, { useState, useEffect } from 'react';
import { Heart, HeartFill } from 'react-bootstrap-icons';

import { useAxiosBaseUrl } from '../../context/AxiosBaseUrl';

const Like = ({ filled, likeId, userId, comment }) => {
    const baseUrl = useAxiosBaseUrl();
    const [isFilled, setIsFilled] = useState(filled);
    const [idLike, setIdLike] = useState(likeId);
    const [totalLikes, setTotalLikes] = useState(comment.total_likes);

    const fetchTotalLikes = async () => {
        try {
            const response = await fetch(`${baseUrl}/comments/${comment.id}/likes`, {
                method: 'GET'
            });
            if (!response.ok) {
                throw new Error('Error al obtener el total de likes');
            }
            const data = await response.json();
            setTotalLikes(data.total_likes);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchTotalLikes();
    }, [comment.id, baseUrl]);

    const removeLike = async () => {
        try {
            const response = await fetch(`${baseUrl}/likes/${idLike}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el like');
            }
            setIsFilled(false);
            setTotalLikes(totalLikes => totalLikes - 1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const addLike = async () => {
        try {
            const response = await fetch(`${baseUrl}/likes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    likable_id: comment.id,
                    likable_type: 'Comment',
                    user_id: userId
                })
            });
            if (!response.ok) {
                throw new Error('Error al agregar el like');
            }
            const data = await response.json(); // Parsea la respuesta JSON
            const newLikeId = data.data.id;
            console.log(data);
            console.log(data.data.id);
            // Obtiene el ID del nuevo like
            setIsFilled(true);
            setIdLike(newLikeId); // Establece el ID del nuevo like en el estado
            setTotalLikes(totalLikes => totalLikes + 1);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleClick = async () => {
        if (isFilled) {
            await removeLike();
        } else {
            await addLike();
        }
    };

    return (
        <div className="col-auto d-flex align-items-center">
            <span style={{ cursor: "pointer", display: "flex", alignItems: "center" }} onClick={handleClick}>
                {isFilled ? <HeartFill color="red" /> : <Heart color="red" />}
                <span className="text-muted ml-2">{totalLikes}</span>
            </span>
        </div>
    );
};

export default Like;
