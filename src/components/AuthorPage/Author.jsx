import React from "react";
import AuthorImg from "../../images/Cesar.jpg"
import { useTranslation } from 'react-i18next';
import "../../styles/Author.css"

function Author() {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="col-12 d-flex justify-content-center flex-wrap">
                <div className="col-12 col-lg-6">
                    <p className="h1 col-12 mb-2">Cesar Manrique</p>
                    <img src={AuthorImg} alt="author" className="col-12 col-lg-6 mx-auto" style={{height: "auto"}}></img>
                </div>
                <div className="col-12 col-lg-6">
                    <p className="text-justify text  mb-2 col-12 mt-5 mt-lg-5">{t("authorPage.authorDesc")}</p>
                </div>
            </div>
    );
}

export default Author;