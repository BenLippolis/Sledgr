import React, { Component } from 'react';
import InflowForm from './inflow/InflowForm';
import InflowList from './inflow/InflowList';
import OutflowForm from './outflow/OutflowForm';
import OutflowList from './outflow/OutflowList';

class ProfileShow extends Component {
    render() {
        return(
            <div className="row"> 
                <div className="col-md-6">
                    <h5> Inflows </h5>
                    <InflowList />
                    <h5> New Inflow </h5>
                    <InflowForm />
                </div>
                <div className="col-md-6">
                    <h5> Outflows </h5>
                    <OutflowList />
                    <h5> New Outflow </h5>
                    <OutflowForm />
                </div>
            </div>
        );
    }
}

export default ProfileShow;