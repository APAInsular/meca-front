import React, { useState } from "react";

const ListPage = () => {
    const [info, setInfo] = useState(null);

    switch (window.location.pathname) {
        case "autores":
            setInfo("autor");
            break;
        case "monumentos":
            setInfo("obra");
            break;
        case "estilos":
            setInfo("estilo");
            break;
        case "eventos":
            setInfo("evento");
            break;
        case "blog":
            setInfo("blog");
            break;
        case "logros":
            setInfo("logro");
            break;
        case "rutas":
            setInfo("ruta");
            break;
        default:
            setInfo(null);
            break;
    }


    return (
        <div class="ListPage">

        </div>
    );
}

export default ListPage;