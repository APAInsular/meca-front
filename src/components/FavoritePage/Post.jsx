import React from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useState } from "react";

const Post = ({ post }) => {
    const [isFill, setIsFill] = useState(false);

    function fillHeart(data) {
        setIsFill(data);
    }
    return (
        <div className="col-xs-12 col-sm-6 col-lg-3 my-5">
            <img src={post.img} alt="author" className="mx-auto" style={{ height: "200px", width: "200px" }}></img>
            <div className="d-flex justify-content-between align-items-center col-12 mx-auto m-1">
                <span className="d-flex align-items-center"><img src={"/Image/PerfilPorDefecto.png"} alt="avatar" style={{ height: "32px", width: "auto" }}></img>{post.name}</span> {post.date}
            </div>
            <p className="col-12 fw-bold text-left">{post.title}</p>
            <p className="col-12 text-justify">{post.desc}</p>
            <div className="d-flex justify-content-between">
                <div>
                    <button className="btn mx-1 text-white rounded rounded-5" style={{ backgroundColor: "#7B96FF" }}>Escultura</button>
                    <button className="btn mx-1 text-white rounded rounded-5" style={{ backgroundColor: "#7B96FF" }}>Arte</button>
                    <button className="btn mx-1 text-white rounded rounded-5" style={{ backgroundColor: "#7B96FF" }}>Fuerteventura</button>
                </div>
                <button onClick={() => fillHeart(!isFill)}>
                    {
                        isFill ? (
                            <HeartFill color={"red"} size="20" />
                        ) : (
                            <Heart color={"red"} size="20" />
                        )
                    }
                </button>
            </div>
        </div>
    );
}

export default Post