import React from "react";
import { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Author = ({author}) => {
    const [isFill, setIsFill] = useState(false);

    function fillHeart(data) {
        setIsFill(data);
    }
    return (
        <div className="mx-auto col-9 col-md-6 col-xl-3">
            <img src={author.img} alt="author" className="col-9 mx-auto" style={{height: "auto"}}></img>
            <p className="fw-bold d-flex justify-content-between m-2 col-9 mx-auto">{author.name}
            <button onClick={() => fillHeart(!isFill)}>
                {
                    isFill ? (
                        <HeartFill color={"red"} />
                    ) : (
                        <Heart color={"red"} />
                    )
                }
            </button></p>
            <p>{author.desc}</p>
        </div> 
    );
};

export default Author;