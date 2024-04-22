


const ListedObra = ({obra, id}) => {
// let titulo = "Escarel do carocol";
// let estilo = "Baroco";
// let discursoLink = "https://google.com"
const { title, author, style } = obra;
    return(
        <div className="flex justify-between my-auto flex-shrink items-center flex-wrap">
            <div>#{id}</div>
            <div>{title}</div>
            <div>{style}</div>
           <button type="button" class="btn">Ubicacion</button>
            <a href=""><img src='/Image/newspaper-folded.png' alt="newspapper" /></a>
            <button type="button" class="btn"><img src="/Image/pen.png" alt="edit" /></button>
            <button type="button" class="btn"><img src="/Image/multiply.png" alt="cancel" /></button>
        </div>
    );
}

export default ListedObra;