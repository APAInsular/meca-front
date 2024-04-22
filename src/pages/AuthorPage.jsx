import Author from '../components/AuthorPage/Author.jsx';
import ObrasRelacionadas from '../components/AuthorPage/ObrasRelaciondas.jsx';



const AuthorPage = () => {
    return (
        <div className='col-12 d-flex flex-wrap my-5 align-items-start'>
            <div className='col-12 col-xl-6'><Author /></div>
            <div className='col-12 col-xl-6 mt-2'><p className='col-12 text-center h1'>OBRAS DESTACADAS</p><ObrasRelacionadas /></div>
            {/* <div className='col-12 mb-5'>
                <p className='h1 text-center h1'>Entrevista</p>
                <iframe className='col-12 h-100 col-xl-4 mx-auto'  src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=pt0y8OQsejq24iux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <p className='text-center col-12 h3'>César, la fuerza de un volcán</p>
                <div className='d-flex align-items-center justify-content-between col-12 col-xl-3 mx-auto'>
                    <div className='rounded' style={{height: "40px", width: "40px", backgroundColor: "black"}}></div>
                    <p>Historia del arte <br></br> 74 supcriptores</p>
                    <button className='btn btn-danger'>Youtube</button>
                </div>
            </div> */}
        </div>
    )
}


export default AuthorPage;