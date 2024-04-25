import React from "react";
import Author from "./Author.jsx";
import AuthorImg from "../../images/Cesar.png"

const FavoriteAuthor = () => {
    const authores = [
        {name: "Cezar Anrique", desc: "(Arrecife, 24 abr 1919 - Teguise, 25 sep 1992) Pintor, escultory artista canariow", img: AuthorImg},
        {name: "Cezar Anrique", desc: "(Arrecife, 24 abr 1919 - Teguise, 25 sep 1992) Pintor, escultory artista canariow", img: AuthorImg},
        {name: "Cezar Anrique", desc: "(Arrecife, 24 abr 1919 - Teguise, 25 sep 1992) Pintor, escultory artista canariow", img: AuthorImg},
        {name: "Cezar Anrique", desc: "(Arrecife, 24 abr 1919 - Teguise, 25 sep 1992) Pintor, escultory artista canariow", img: AuthorImg}
    ]
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {authores.map((author, index) => (
                <Author key={index} author={author}></Author>
            ))}
        </div>
    );
};

export default FavoriteAuthor;