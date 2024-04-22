


const ListedObra = () => {
let id = 0;
let titulo = "Escarel do carocol";
let estilo = "Baroco";
let discursoLink = "https://google.com"
    return(
        <div className="flex justify-between my-auto flex-shrink items-center">
            <div>#{id}</div>
            <div>{titulo}</div>
            <div>{estilo}</div>
           <button type="button" class="btn btn-outline-primary">Ubicacion</button>
            <a href={discursoLink}><img src='/Image/newspaper-folded.png' alt="newspapper" /></a>
            <button type="button" class="btn btn-outline-primary"><img src="/Image/pen.png" alt="edit" /></button>
            <button type="button" class="btn btn-outline-primary"><img src="/Image/multiply.png" alt="cancel" /></button>
        </div>
    );
}

export default ListedObra;