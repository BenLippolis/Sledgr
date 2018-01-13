import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchInflows, deleteInflow } from '../../../actions'

class InflowList extends Component {
  componentDidMount () {
    this.props.fetchInflows()
  }

  onDeleteClick (inflow) {
    this.props.deleteInflow(inflow)
  }

  renderInflows () {
    return this.props.inflows.map(inflow => {
      return (
        <div className='card' key={inflow._id}>
          <div className='card-body'>
            <p className='card-text'>
              {inflow.title} | ${inflow.amount} |
              <button
                className='btn btn-danger btn-sm'
                onClick={this.onDeleteClick.bind(this, inflow)}
              >
                {' '}
                Delete{' '}
              </button>
            </p>
          </div>
        </div>
      )
    })
  }

  render () {
    if (this.props.inflows.length > 0) {
      return (
        <div className='all'>
          <h5> Monthly Inflows </h5>
          {this.renderInflows()}
        </div>
      )
    } else {
      return null
    }
  }
}

function mapStateToProps (state) {
  return { inflows: state.inflows }
}
export default connect(mapStateToProps, { fetchInflows, deleteInflow })(
  InflowList
)
