import React, { Component } from 'react';
import InflowForm from './inflow/InflowForm';
import OutflowForm from './outflow/OutflowForm';

class ProfileShow extends Component {
    render() {
        return(
            <div className="row"> 
                <div className="col-md-4">
                    <h3> Inflow Form </h3>
                    <InflowForm />
                </div>
                <div className="col-md-4">
                    <h3> Outflow Form </h3>
                    <OutflowForm />
                </div>
            </div>
        );
    }
}

export default ProfileShow;