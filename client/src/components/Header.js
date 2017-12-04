import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null: 
                return;
            case false:
                return (
                    <li className="nav-item">
                        <a className="nav-link btn btn-sm btn-outline-secondary align-middle" href="/auth/google">Sign Up</a>
                    </li>
                );
            default:
                return (
                    <li className="nav-item">
                        <a className="nav-link btn btn-sm btn-outline-secondary align-middle" href="/api/logout">Log Out</a>
                    </li>
                );
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to={this.props.auth ? '/' : '/'} className="navbar-brand">
                    Sledgr
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                <ul className="nav navbar-nav navbar-right">

                </ul>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
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
                    {this.renderContent()}
                </ul>
                </div>
                </nav>
            </div>
        );
    }
}
// Pass the state we want to access to the component
function mapStateToProps(state) {
    // Return an object to be passed to the header as props 
    // Return the property we assigned the appropriate reducer to 
    return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);