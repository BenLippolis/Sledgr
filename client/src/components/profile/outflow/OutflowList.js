import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOutflows } from '../../../actions';

class OutflowList extends Component {
    componentDidMount() {
        this.props.fetchOutflows();
    }

    renderOutflows() {
        return this.props.outflows.map(outflow => {
            return(
                <div className="card" key={outflow._id}>
                    <div className="card-body">
                        <p className="card-text">Title: {outflow.title} | Amount: ${outflow.amount} </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return(
            <div className="all">
                {this.renderOutflows()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { outflows: state.outflows }
}
export default connect(mapStateToProps, { fetchOutflows })(OutflowList);
