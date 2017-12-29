import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class CreateProfile extends Component {
    render() {
        if (this.props.profile) {
            return(null);
        } else
            return ( 
                <div> 
                    <Link to={'/profile/create'} className="btn btn-primary">Create Profile</Link>
                </div>
            );
        }
    }

    function mapStateToProps(state) {
        // In combine resucers we assign reducer value to 'surveys'
        return { profile: state.profile }
    }

export default connect(mapStateToProps)(CreateProfile);