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
                    <InflowList />
                    <InflowForm />
                </div>
                <div className="col-md-6">
                    <OutflowList />
                    <OutflowForm />
                </div>
            </div>
        );
    }
}

export default ProfileShow;