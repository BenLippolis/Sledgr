import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchInflows, deleteInflow } from '../../../actions';

class InflowList extends Component {
    componentDidMount() {
        this.props.fetchInflows();
    }

    onDeleteClick(id) {
        this.props.deleteInflow(id);
    }


    renderInflows() {
        return this.props.inflows.map(inflow => {
            return(
                <div className="card" key={inflow._id}>
                    <div className="card-body">
                        <p className="card-text">{inflow.title} | ${inflow.amount} |                             
                            <button className="btn btn-danger btn-sm"
                                onClick={this.onDeleteClick.bind(this, inflow._id)}>                       
                                Delete 
                            </button>
                        </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return(
            <div className="all">
                <h5> Inflows </h5>
                {this.renderInflows()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { inflows: state.inflows }
}
export default connect(mapStateToProps, { fetchInflows, deleteInflow })(InflowList);
