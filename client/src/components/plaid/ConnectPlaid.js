import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectPlaid } from '../../actions'; 

class ConnectPlaid extends Component {
    render() {
        if(this.props.isConnected) {
            return (
                <h3> You are connected! </h3>                            
            );
        } else {
            return (
                <div>
                    <button className="btn btn-primary" type="submit"
                    onClick={this.connect}>Connect to Plaid</button>
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
