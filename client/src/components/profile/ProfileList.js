import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../actions';
// Need to connect to Redux in order to call action creator to fetch list of surveys

class ProfileList extends Component {
    componentDidMount() {
        this.props.fetchProfile();
    }

    renderProfiles() {
        return this.props.profiles.reverse().map(profile => {
            return (
                    <div className="card one-survey" key={profile._id}>
                        <div className="card-body">
                        <h3 className="card-title">Title: {profile.name} </h3>
                        </div>
                    </div>
            );
        });
    }
    
    render() {
        return (
            <div className="all">
                {this.renderProfiles()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    // In combine resucers we assign reducer value to 'surveys'
    return { profiles: state.profiles }
}

export default connect(mapStateToProps, { fetchProfile })(ProfileList);