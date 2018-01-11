import React, { Component } from 'react';
import { connect } from 'react-redux';

class AccountVisualization extends Component {
    render() {
        return(
            <div className="jumbotron">
                Account Visualization <br/>
                Target Savings {this.props.profile.max_savings} + account balance
            </div>
        );
    }

}

function mapStateToProps(state){
    return({ profile: state.profile });
}

export default connect(mapStateToProps)(AccountVisualization);