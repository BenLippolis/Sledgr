import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Sledgr</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav">
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown link
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                    </li>
                    <form className="form-inline">
                        <button className="btn btn-sm align-middle btn-outline-secondary" type="button">Sign Up</button>
                    </form>
                </ul>
                </div>
                </nav>
            </div>
        );
    }
}

export default Header;