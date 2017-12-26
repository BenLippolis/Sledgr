import React, { Component } from 'react';
import InflowForm from '../inflow/InflowForm';
import InflowList from '../inflow/InflowList';
import OutflowForm from '../outflow/OutflowForm';
import OutflowList from '../outflow/OutflowList';
import NetIncome from './NetIncome';
import { fetchProfile } from '../../../actions';
import { connect } from 'react-redux';

class ProfileShow extends Component {
    componentDidMount() {
        this.props.fetchProfile();
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <NetIncome />
                    </div>
                </div>
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
            </div>
        );
    }
}



export default connect(null, { fetchProfile })(ProfileShow);