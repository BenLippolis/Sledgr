import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../../actions';


class NetIncome extends Component {

    renderProfileNetIncome() {
        if (this.props.profile) {
            return this.props.profile.net_income
        } 
    };

    onUpdateClick() {
        this.props.updateProfile();
    }

    renderDoneButton() {
        switch (this.props.profile.show_net_income) {
            case null: 
                return;
            case false: 
               return;
            case true: 
                return(                           
                    <button className="btn btn-danger btn-sm"
                        onClick={this.onUpdateClick.bind(this)}>                       
                        Done 
                    </button>
                );
        }
    };

    render() {
        return(
            <div className="jumbotron"> 
                <h3> Max Monthly Savings: ${this.renderProfileNetIncome()} </h3>
                {this.renderDoneButton()}
            </div>
        );
    };
};

function mapStateToProps(state) {
    return({ profile: state.profile });
}

export default connect(mapStateToProps, { updateProfile })(NetIncome);