import React, { Component } from 'react';
import InflowForm from '../inflow/InflowForm';
import InflowList from '../inflow/InflowList';
import OutflowForm from '../outflow/OutflowForm';
import OutflowList from '../outflow/OutflowList';
import NetIncome from './NetIncome';
import { fetchProfile } from '../../../actions';
import { connect } from 'react-redux';
import TargetSavings from './TargetSavings';
import SavingsSchedule from './SavingsSchedule';

class ProfileShow extends Component {
    componentDidMount() {
        this.props.fetchProfile();
    }

    renderInflowOutflow() {
        switch (this.props.profile.show_net_income) {
            case null: 
                return;
            case false: 
                return;
            default: 
                return (                
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
                )
        }
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <NetIncome />
                    </div>
                </div>
                {this.renderInflowOutflow()}
                <div className="row">
                    <div className="col-md-12">
                        <TargetSavings />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <SavingsSchedule />
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return({ profile: state.profile })
}

export default connect(mapStateToProps, { fetchProfile })(ProfileShow);