import React, { Component } from 'react'
import { connect } from 'react-redux'

class Visual extends Component {
  render () {
    return (
      <div className='progress'>
        <div
          className='progress-bar bg-success'
          role='progressbar'
          style={{
            width: this.props.profile.target_savings /
              this.props.profile.max_savings *
              100 +
              '%'
          }}
          aria-valuenow='30'
          aria-valuemin='0'
          aria-valuemax='100'
        />

      </div>
    )
  }
}
function mapStateToProps (state) {
  return { profile: state.profile }
}
export default connect(mapStateToProps, null)(Visual)
