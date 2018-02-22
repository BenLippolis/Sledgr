import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchActiveWeek } from '../../../../actions'

class WeeklyVisual extends Component {
  componentDidMount () {
    this.props.fetchActiveWeek()
  }
  render () {
    return (
      <div>
        <h3> Weekly visual </h3>
        <div className='progress'>
          <div
            className='progress-bar'
            role='progressbar'
            style={{
              width: (1 - 1 / this.props.activeWeek.max_spend) * 100 + '%'
            }}
            aria-valuenow='25'
            aria-valuemin='0'
            aria-valuemax='100'
          >
            {this.props.activeWeek.max_spend}
          </div>
        </div>
        <p />
        <p />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    profile: state.profile,
    activeWeek: state.activeWeek
  }
}

export default connect(mapStateToProps, { fetchActiveWeek })(WeeklyVisual)
