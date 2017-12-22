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
                        <p className="card-text">Title: {inflow.title} | Amount: {inflow.amount} </p>
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
