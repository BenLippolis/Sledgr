import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../../../actions';


class MaxSavings extends Component {

    renderProfileMaxSavings() {
        if (this.props.profile) {
            return this.props.profile.max_savings
        } 
    };

    onUpdateClick(value) {
        this.props.updateProfile(value);
    }

    renderDoneButton() {
        switch (this.props.profile.show_max_savings) {
            case null: 
                return;
            case false: 
               return(                           
                <button className="btn btn-primary btn-sm"
                    onClick={this.onUpdateClick.bind(this, true)}>                       
                    Edit Max Savings 
                </button>
            );
            case true: 
                return(                           
                    <button className="btn btn-danger btn-sm"
                        onClick={this.onUpdateClick.bind(this, false)}>                       
                        Done Editing 
                    </button>
                );
            default: 
                return;
        }
    };

    render() {
        return(
            <div className="jumbotron"> 
                <h3> Max Monthly Savings: ${this.renderProfileMaxSavings()} </h3>
                {this.renderDoneButton()}
            </div>
        );
    };
};

function mapStateToProps(state) {
    return({ profile: state.profile });
}

export default connect(mapStateToProps, { updateProfile })(MaxSavings);