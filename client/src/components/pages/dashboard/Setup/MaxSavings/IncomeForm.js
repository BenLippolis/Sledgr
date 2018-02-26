import _ from 'lodash'
import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../../../../actions'

class IncomeForm extends Component {
  onSubmit (values) {
    this.props.addIncome(values)
  }

  render () {
    const { handleSubmit } = this.props

    return (
      <div className='form-group'>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <label>Enter Income and frequency</label><br />
          <Field
            name='income'
            component='input'
            type='number'
            placeholder='Income Per Paycheck'
          />
          <Field
            name='incomeFrequency'
            component='input'
            type='number'
            placeholder='Paycheck Frequency'
          />
          <button className='btn btn-primary float-right' type='submit'>
            Add Income
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
  form: 'profileIncomeForm'
})(connect(mapStateToProps, actions)(withRouter(IncomeForm)))
