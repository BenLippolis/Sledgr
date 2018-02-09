import React, { Component } from 'react'
import InflowForm from '../../inflow/InflowForm'
import InflowList from '../../inflow/InflowList'
import OutflowForm from '../../outflow/OutflowForm'
import OutflowList from '../../outflow/OutflowList'
import { fetchProfile } from '../../../actions'
import { connect } from 'react-redux'

class ProfileShow extends Component {
  componentDidMount () {
    this.props.fetchProfile()
  }

  renderInflowOutflow () {
    switch (this.props.profile.show_max_savings) {
      case true:
        return (
          <div className='row'>
            <div className='col-md-6'>
              <InflowList />
              <InflowForm />
            </div>
            <div className='col-md-6'>
              <OutflowList />
              <OutflowForm />
            </div>
          </div>
        )
      default:
    }
  }

  render () {
    return (
      <div>
        <div className='row'>
          <div className='col-md-12 text-center' />
        </div>
        {this.renderInflowOutflow()}
        <div className='row'>
          <div className='col-md-12' />
        </div>
        <div className='row'>
          <div className='col-md-12' />
        </div>
        <div className='row'>
          <div className='col-md-12' />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default connect(mapStateToProps, { fetchProfile })(ProfileShow)
