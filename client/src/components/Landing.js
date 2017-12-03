import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Landing.css';

class Landing extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
            return (
                <h1> Welcome to Sledgr.com </h1>
            );

            case false:
            return (
                <h1> Welcome to Sledgr.com </h1>
            );

            default:
            return (
                <h1> Dashboard </h1>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron text-center branding">
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(Landing);