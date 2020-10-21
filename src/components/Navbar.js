import React, { useState} from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-contents">
                    <Link to="/" className="navbar-logo">
                        PERFECT <i class="fas fa-meteor"></i>
                    </Link>
                </div>
            </nav>
        </>

    )
}

export default Navbar
