import React from "react";
import Post from "./Post.jsx";

const FavoritePosts = () => {
    const Cezar = "/Image/Cesar.jpg";

    const posts = [
        { img: Cezar, name: "Nombre Usuario", date: "22.04.2024", title: "Título de la entrada del blog", desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" },
        { img: Cezar, name: "Nombre Usuario", date: "22.04.2024", title: "Título de la entrada del blog", desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" },
        { img: Cezar, name: "Nombre Usuario", date: "22.04.2024", title: "Título de la entrada del blog", desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" },
        { img: Cezar, name: "Nombre Usuario", date: "22.04.2024", title: "Título de la entrada del blog", desc: "Descripción corta de la entrada del blog de una usuario concreto mientras escribe esta descripción que saldrá en el homePage abajo del todo" }
    ];
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {posts.map((post, index) => (
                <Post key={index} post={post}></Post>
            ))}
        </div>
    );
}

export default FavoritePosts