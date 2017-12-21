import React, { Component } from 'react';
import InflowForm from './inflow/InflowForm';

class ProfileShow extends Component {
    render() {
        return(
            <div className="col-md-4"> 
                <InflowForm /> 
            </div>
        );
    }
}

export default ProfileShow;