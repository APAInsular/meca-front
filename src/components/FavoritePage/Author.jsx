import React from "react";
import { useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Author = ({author}) => {
    const [isFill, setIsFill] = useState(false);

    function fillHeart(data) {
        setIsFill(data);
    }
    return (
        <div className="col-xs-12 col-sm-6 col-lg-3">
            <img src={author.img} alt="author" className="mx-auto" style={{height: "200px", width: "200px"}}></img>
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