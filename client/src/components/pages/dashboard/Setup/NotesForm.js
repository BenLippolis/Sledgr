import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../../actions'

class NotesForm extends Component {
  onSubmit (values) {
    this.props.addNotes(values)
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div className='form-group'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label>Enter Notes Here</label><br />
          <Field
            name='rewardNotes'
            component='input'
            type='text'
            placeholder={this.props.profile.rewardNotes}
          />
          <button className='btn btn-primary float-right' type='submit'>
            Add Notes
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { profile: state.profile }
}

export default reduxForm({
  form: 'profileNotesForm'
})(connect(mapStateToProps, actions)(withRouter(NotesForm)))
