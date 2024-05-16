import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="col-7 d-flex align-items-center justify-content-center vh-100" style={{ borderRight: "2px solid #263C5C" }}>
            <Link to="/es/MeCa">
                <img src={"/Image/Logos/MECA-09.png"}
                    alt="Logo"
                    className="img-fluid"
                    style={{ width: '700px', height: 'auto' }}>
                </img>
            </Link>
        </div>
    )
}

export default Logo