import React from "react";
import "../styles/SearchPage.css";


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
                    {/* <button class="monumentobtn"><img src={} alt="/" class="lupa" /><span class='mon'>Monumento</span></button> */}
                    <input type="text" placeholder="Buscar" class="buscar" />
                    {/* <button class="filtrobtn"><img src={filtro} alt="/" class="filtro" /><span class='fil'>Filtros</span></button> */}
                    {/* <button class="searhbtn"><img src={search} alt="/" class="search" /></button> */}
                </div>
            </div>
            <div class="monumenty">
                {blocks.map((blok, index) => (
                    <div key={index} class="blok">
                        <div class="zdjecie">
                            {/* <img src={obraz} alt='/' class="obraz" /> */}
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