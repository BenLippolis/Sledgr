import React, { Component } from 'react';
import InflowForm from './inflow/InflowForm';
import InflowList from './inflow/InflowList';
import OutflowForm from './outflow/OutflowForm';

class ProfileShow extends Component {
    render() {
        return(
            <div className="row"> 
                <div className="col-md-4">
                    <h3> Inflows </h3>
                    <InflowList />
                    <h3> New Inflow </h3>
                    <InflowForm />
                </div>
                <div className="col-md-4">
                    <h3> New Outflow </h3>
                    <OutflowForm />
                </div>
            </div>
        );
    }
}

export default ProfileShow;