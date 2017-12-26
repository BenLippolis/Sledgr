import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOutflows, deleteOutflow } from '../../../actions';

class OutflowList extends Component {
    componentDidMount() {
        this.props.fetchOutflows();
    }

    onDeleteClick(outflow_id) {
        this.props.deleteOutflow(outflow_id);
    }

    renderOutflows() {
        return this.props.outflows.map(outflow => {
            return(
                <div className="card" key={outflow._id}>
                    <div className="card-body">
                    <p className="card-text">{outflow.title} | ${outflow.amount} |                             
                        <button className="btn btn-danger btn-sm"
                            onClick={this.onDeleteClick.bind(this, outflow._id)}>                       
                            Delete 
                        </button>
                    </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        if(this.props.outflows.length > 0) {
            return( 
                <div className="all">
                    <h5> Monthly Outflows </h5>
                    {this.renderOutflows()}
                </div>
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return { outflows: state.outflows }
}
export default connect(mapStateToProps, { fetchOutflows, deleteOutflow })(OutflowList);
