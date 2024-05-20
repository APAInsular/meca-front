import React, { useState, useEffect } from "react";
import "../styles/MonumentPage.css";
import axios from "axios";
import BigSpinner from "../components/BigSpinner";
import Comment from "../components/Interaction/Comment";
import { useAxiosBaseUrl } from '../context/AxiosBaseUrl';
import MonumentDetails from "../components/MonumentPage/MonumentDetails";
import CommentModal from "../components/MonumentPage/CommentModal";
import RatingModal from "../components/MonumentPage/RatingModal";

const MonumentPage = ({ monument }) => {
  const baseUrl = useAxiosBaseUrl();
  const id = window.location.pathname.split("/")[3];
  const userId = 1;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [qrMessage, setQrMessage] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const checkQrAndUpdatePoints = async () => {
    try {
      const response = await axios.get(`${baseUrl}/check-qr/${userId}/${id}`);
      setQrMessage(response.data.message);
      alert(response.data.message);
      console.log(response.data.message)
    } catch (error) {
      setQrMessage('Error al verificar el QR.');
    }
  };

  useEffect(() => {
    fetchMonument();
    const urlParams = new URLSearchParams(window.location.search);
    const qr = urlParams.get('qr');
    if (qr === 'true') {
      checkQrAndUpdatePoints();
    }
  }, [id]);

  const fetchMonument = async () => {
    try {
      const response = await axios.get(`${baseUrl}/monuments/${id}?userId=${userId}`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCommentSubmit = async () => {
    try {
      await axios.post(`${baseUrl}/comments`, {
        userId,
        monumentId: id,
        content: comment
      });
      setShowCommentModal(false);
      setComment("");
      fetchMonument(); // Refresh the comments
    } catch (error) {
      alert("Error al enviar el comentario.");
    }
  };

  const handleRatingSubmit = async () => {
    try {
      await axios.post(`${baseUrl}/ratings`, {
        userId,
        monumentId: id,
        rating
      });
      setShowRatingModal(false);
      setRating(0);
      fetchMonument(); // Refresh the monument data
    } catch (error) {
      alert("Error al enviar la calificación.");
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <BigSpinner />
  } else {
    return (
      <div className="container mt-5">
        <div className="row text-center">
          <div className="col-12">
            <h1>{data.title}</h1>
          </div>
        </div>
        <MonumentDetails data={data} />
        <div className="row mt-3">
          <div className="col-lg-4">
            <button
              type="button"
              className="py-1 px-3"
              style={{ border: "3px solid #263c5c", borderRadius: "20px" }}
              onClick={() => setShowCommentModal(true)}
            >
              New Comment
            </button>
            <div className="rating" style={{ marginLeft: '20px' }}>
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  style={{ cursor: 'pointer', fontSize: '1.5em', color: rating >= star ? '#ffc107' : '#e4e5e9' }}
                  onClick={() => setRating(star)}
                >
                  ★
                </span>
              ))}
              <button
                type="button"
                className="py-1 px-3"
                style={{ border: "3px solid #263c5c", borderRadius: "20px", marginLeft: '10px' }}
                onClick={() => setShowRatingModal(true)}
              >
                Rate
              </button>
            </div>
          </div>
          <div className="col-lg-8">
            {data.comments.map((comment, index) => (
              <Comment comment={comment} key={index} userId={userId} />
            ))}
          </div>
        </div>

        <CommentModal
          show={showCommentModal}
          handleClose={() => setShowCommentModal(false)}
          comment={comment}
          setComment={setComment}
          handleSubmit={handleCommentSubmit}
        />

        <RatingModal
          show={showRatingModal}
          handleClose={() => setShowRatingModal(false)}
          rating={rating}
          setRating={setRating}
          handleSubmit={handleRatingSubmit}
        />
      </div>
    );
  }
}

export default MonumentPage;
