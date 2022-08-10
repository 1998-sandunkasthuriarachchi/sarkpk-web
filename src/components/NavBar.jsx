import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a href="" className="navbar-brand">
                    <img src="./logo-32x32.png" alt="" />
                </a>
                <button
                    className="navbar-toggler bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon">
                        <AiOutlineMenu color="#fff" size={30} />{' '}
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase fw-bold">
                        <li className="nav-item ">
                            <a href="" className="nav-link active" aria-current="page" style={{ color: '#98ff98' }}>
                                Play
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link " aria-current="page" style={{ color: '#98ff98' }}>
                                Info
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link" aria-current="page" style={{ color: '#98ff98' }}>
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link" aria-current="page" style={{ color: '#98ff98' }}>
                                Community
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
