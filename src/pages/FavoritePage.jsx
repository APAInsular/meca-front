import React from "react";
import ObrasDestacadas from "../components/HomePage/ObrasDestacadas";
import FavoriteAuthor from "../components/FavoritePage/FavoriteAuthor";
import FavoritePosts from "../components/FavoritePage/FavoritePosts";

const FavoritePage = () => {
    return (
        <div>
            <p className="h1 rounded col-6 col-lg-3 text-center mx-auto m-5" style={{ backgroundColor: "yellow" }}>Favoritos</p>
            <p className="h2 col-6 col-lg-3 text-center mx-auto m-5">Obras <span className="rounded" style={{ backgroundColor: "yellow" }}>Favoritos</span></p>
            <ObrasDestacadas></ObrasDestacadas>
            <p className="h2 col-6 text-center mx-auto m-5">Autores <span className="rounded" style={{ backgroundColor: "yellow" }}>Favoritos</span></p>
            <FavoriteAuthor></FavoriteAuthor>
            <p className="h2 col-6 text-center mx-auto m-5">Posts <span className="rounded" style={{ backgroundColor: "yellow" }}>Favoritos</span></p>
            <FavoritePosts></FavoritePosts>
        </div>
    );
};

export default FavoritePage