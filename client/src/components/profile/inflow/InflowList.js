import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInflows } from '../../../actions';

class InflowList extends Component {
    componentDidMount() {
        this.props.fetchInflows();
    }

    renderInflows() {
        return this.props.inflows.map(inflow => {
            return(
                <div className="card" key={inflow._id}>
                    <div className="card-body">
                    <div className="col-md-6">
                    <p className="card-text">Title: {inflow.title} </p>
                    </div>
                    <div className="col-md-6">
                    <p className="card-text"> Amount: ${inflow.amount}</p>
                    </div>
                    <div className="col-md-6">
                    <button className="btn btn-danger btn-sm pull-xs-right">
                        Delete 
                    </button>
                    </div>
                    
                        

                    </div>
                </div>
            );
        });
    }

    render() {
        return(
            <div className="all">
                {this.renderInflows()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { inflows: state.inflows }
}
export default connect(mapStateToProps, { fetchInflows })(InflowList);
