import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectPlaid } from '../../actions'; 
import Plaid from 'plaid';

class ConnectPlaid extends Component {
    render() {
        if(this.props.isConnected) {
            return (
                <h3> You are connected! </h3>                            
            );
        } else {
            return (
                <div>
                    <h3> Please connect to plaid </h3>
                    <button className="btn btn-primary" type="submit"
                    onClick={this.props.onClick}>Connect to Plaid</button>
                </div>
            ); 
        }     
    }
}

function mapStateToProps(state) {
    return { isConnected: state.auth.access_token }; 
}

const actionCreators = { onClick: connectPlaid };

export default connect(mapStateToProps, actionCreators)(ConnectPlaid);
