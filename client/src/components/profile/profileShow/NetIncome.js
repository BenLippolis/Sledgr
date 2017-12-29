import React, { Component } from 'react';
import { connect } from 'react-redux';

class NetIncome extends Component {

    renderProfileNetIncome() {
        if (this.props.profile) {
            return this.props.profile.net_income
        } else {
            return;
        };
    };

    render() {
        return(
            <div className="jumbotron"> 
                <h3> Max Monthly Savings: ${this.renderProfileNetIncome()} </h3>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return({ profile: state.profile })
}

export default connect(mapStateToProps)(NetIncome);