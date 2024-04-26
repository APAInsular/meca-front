import React from "react"

import Author from '../components/AuthorPage/Author.jsx';
import ObrasRelacionadas from '../components/AuthorPage/ObrasRelaciondas.jsx';



const AuthorPage = () => {
    return (
        <div className='col-12 d-flex flex-wrap my-5 align-items-start'>
            <div className='col-12 col-xl-12'><Author /></div>
            <div className='col-12 col-xl-6 mx-auto mt-5'><p className='col-12 text-center h1'>OBRAS DESTACADAS</p><ObrasRelacionadas /></div>
        </div>
    )
}


export default AuthorPage;