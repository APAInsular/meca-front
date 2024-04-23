


const ListedObra = ({ obra, id }) => {
    // let titulo = "Escarel do carocol";
    // let estilo = "Baroco";
    // let discursoLink = "https://google.com"
    const { title, author, style } = obra;
    return (
            <div className="flex justify-evenly my-auto flex-shrink items-center flex-wrap py-4">
                <div>#{id}</div>
                <div className="w-[170px]">{title}</div>
                <div>{author.name}</div>
                <div>{style}</div>
                <button type="button"><img src="/Image/add.png" alt="" /></button>
                <a href=""><img className="w-[50px] h-[30px]" src='/Image/newspaper-folded.png' alt="newspapper" /></a>
                <button className="w-[50px] h-[30px]" type="button"><img className="w-[50px] h-[30px]" src="/Image/pen.png" alt="edit" /></button>
                <button className="w-[50px] h-[30px]" type="button"><img className="w-[50px] h-[30px]" src="/Image/multiply.png" alt="cancel" /></button>
            </div>
    );
}

export default ListedObra;