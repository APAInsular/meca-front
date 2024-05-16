import React from "react";
import Like from "./Like";

const Comment = ({ comment, userId }) => {
    return (
        <div className="container my-1" style={{ border: "1px solid #263c5c", borderRadius: "20px" }}>
            <div className="row align-items-center">
                <div className="col-auto">
                    <img src={"/Image/PerfilPorDefecto.png"} alt="Profile Picture" className="rounded-circle" style={{ width: "40px", height: "40px", border: "1px solid #263c5c" }} />
                </div>
                <div className="col-auto">
                    <div className="row d-flex justify-content-between">
                        <div className="col">
                            <span className="font-weight-bold text-start" style={{ fontSize: "15px" }}>{comment.nickname}</span>
                        </div>
                        <div className="col text-end">
                            <span className="text-muted text-end" style={{ fontSize: "12px" }}>{comment.created_at.split(' ')[0]}</span>
                        </div>
                    </div>
                    <div className="row">
                        <p className="m-0 text-start" style={{ fontSize: "14px", overflowWrap: "break-word" }}>{comment.content}</p>
                    </div>
                    <div className="row">
                        <Like filled={comment.user_like.value} likeId={comment.user_like.like_id} userId={userId} comment={comment} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comment;
