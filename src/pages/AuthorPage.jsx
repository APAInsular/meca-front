import React from "react"

import Author from '../components/AuthorPage/Author.jsx';
import ObrasRelacionadas from '../components/AuthorPage/ObrasRelaciondas.jsx';



const AuthorPage = () => {
    return (
        <div>
            <Author />
            <ObrasRelacionadas />
        </div>
    )
}


export default AuthorPage;