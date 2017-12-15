import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateProfile extends Component {
    render() {
        return (
            <div> 
                <Link to={'/profile/create'} className="btn btn-primary">Create Profile</Link>
            </div>
        );
    }
}

export default CreateProfile;