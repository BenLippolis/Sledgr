import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/Landing.css';
import Dashboard from '../dashboard/Dashboard';

class Landing extends Component {

    renderContent() {
        switch(this.props.auth) {
            case null:
            return (
                <div />
            );

            case false:
            return (
                <div className="jumbotron text-center branding">
                    <h1> Welcome to Sledgr.com </h1>
                </div>
            );

            default:
            return (
                <Dashboard />
            );
        }
    }

    render() {
        return (
            <div>
                    {this.renderContent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(Landing);