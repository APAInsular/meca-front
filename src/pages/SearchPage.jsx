import React from "react";
import "../styles/SearchPage.css";
import lupa from "../images/lupa.svg";
import filtro from "../images/filtras.svg";
import search from "../images/search.svg";
import obraz from "../images/Obra.jpg";


const SearchPage = () => {

    const blocks = [
        { name: "Nombre del monumento", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" },
        { name: "Nombre del monumento", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" },
        { name: "Nombre del monumento", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" },
        
    ];

    return (
        <div class='SearchPage'>
            <div class='explolar'>
                <h1>Explorar</h1>
                <div class="busquedabar">
                    <button class="monumentobtn"><img src={lupa} alt="/" class="lupa"/><p>Monumento</p></button>
                    <input type="text" placeholder="Buscar" class="buscar"/>
                    <button class="filtrobtn"><img src={filtro} alt="/" class="filtro"/><p>Filtros</p></button>
                    <button class="searhbtn"><img src={search} alt="/" class="search"/></button>
                </div>
            </div>
            <div class="monumenty">
            {blocks.map((blok, index) => (
                <div key={index} class="blok">
                    <div class="zdjecie">
                        <img src={obraz} alt='/' class="obraz"/>
                    </div>
                    <div class="nazwa">
                        <p>{blok.name}</p>
                    </div>
                    <div class="opis">
                        <span class='text'>{blok.description}</span>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default SearchPage;