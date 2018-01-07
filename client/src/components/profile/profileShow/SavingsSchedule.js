import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSavingsSchedule } from '../../../actions';

class SavingsSchedule extends Component {
    onUpdateClick(value) {
        this.props.updateSavingsSchedule(value);
    }

    renderScheduleOptions() {
        switch (this.props.profile.savings_schedule === 0) {
            case false: 
                return (
                    <p> You're scheduled to hit a savings goal every {this.props.profile.savings_schedule} month(s) </p>
                );
            case true: 
                return(
                    <div>
                    <p> Please make a selection </p>
                    <button className="btn btn-success btn-sm"
                    onClick={this.onUpdateClick.bind(this, 1)}>                       
                        1 Month
                    </button>
                    <button className="btn btn-success btn-sm">                       
                        2 Months
                    </button>
                    <button className="btn btn-success btn-sm">                       
                        3 Months 
                    </button>
                    </div>
                );
            case null: 
                return;
            default: 
                return;
        }
    }

    render() {
        return(
            <div className="jumbotron text-center">
                <h3> Savings Schedule </h3>
                {this.renderScheduleOptions()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return ({ profile: state.profile})
};

export default connect(mapStateToProps, { updateSavingsSchedule})(SavingsSchedule);