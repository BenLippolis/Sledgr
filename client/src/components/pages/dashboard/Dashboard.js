import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as actions from '../../../actions';
import { connect } from 'react-redux';

class Dashboard extends Component {
    componentDidMount() {
        this.props.fetchProfile();
    }

    renderCreateProfileLink() {
        if (this.props.profile) {
            return;
        } else
            return ( 
                <div> 
                    <Link to={'/profile/create'} className="btn btn-primary">Create Profile</Link>
                </div>
            );
    }

    render() {
        return (
            <div>
                <div className="jumbotron text-center branding">
                    <h1> Welcome to your digital dash </h1>
                </div>
                {this.renderCreateProfileLink()}
            </div>
    
        );
    }
};

function mapStateToProps(state) {
    return{ profile: state.profile }
}

export default connect(mapStateToProps, actions)(Dashboard);