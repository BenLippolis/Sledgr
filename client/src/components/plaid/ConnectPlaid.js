import React, { Component } from 'react';
import { connect } from 'react-redux';
import { connectPlaid } from '../../actions'; 

class ConnectPlaid extends Component {
      render() {
        return null;
      }
}

function mapStateToProps(state) {
    return { isConnected: state.auth.access_token }; 
}

//const actionCreators = { onClick: connectPlaid };

export default connect(mapStateToProps)(ConnectPlaid);
