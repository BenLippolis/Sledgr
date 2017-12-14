import React, { Component } from 'react';
import ProfileForm from './ProfileForm';
import { reduxForm } from 'redux-form';

class ProfileCreate extends Component {
    render() {
        return(
            <div> 
                <h3>Create Profile </h3>
                <ProfileForm />
            </div>
        );
    }
}

export default reduxForm({
    // By default, redux form dumps form values when component unmounts
    form: 'profileForm'
})(ProfileCreate);