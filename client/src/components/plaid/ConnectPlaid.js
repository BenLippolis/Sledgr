import React from 'react';
import { connect } from 'react-redux';
import { connectPlaid } from '../../actions' 

const ConnectPlaid = ({ isConnected, onClick }) => {
        if(isConnected) {
            return (
                <h3> You are connected! </h3>                            
            );
        } else {
            return (
                <div>
                    <h3> Please connect to plaid </h3>
                    <button className="btn btn-success" type="submit"
                    onClick={onClick}>Connect to Plaid</button>    
                </div>
            );                          
        }
} 

function mapStateToProps(state) {
    return { isConnected: state.auth.access_token }; 
}

const actionCreators = { onClick: connectPlaid };

export default connect(mapStateToProps, actionCreators)(ConnectPlaid);