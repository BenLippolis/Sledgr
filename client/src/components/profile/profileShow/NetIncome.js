import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../../../actions';

class NetIncome extends Component {

    renderProfileNetIncome() {
        switch (this.props.profile.length == 1) {
            case null: 
                return;
            case false: 
                return;
            default: {
                return this.props.profile.map(profile => {
                    return(profile.net_income);
                });
            }
        }
    }

    render() {
        return(
            <div className="jumbotron"> 
                <h3> Max Monthly Savings: ${this.renderProfileNetIncome()} </h3>
            </div>
        );
    };
};

function mapStateToProps(state) {
    return({ profile: state.profiles })
}

export default connect(mapStateToProps)(NetIncome);