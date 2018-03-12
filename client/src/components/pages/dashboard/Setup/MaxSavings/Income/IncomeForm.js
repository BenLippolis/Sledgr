import React, { Component } from 'react'
import _ from 'lodash'
import { reduxForm, Field } from 'redux-form'
import IncomeField from './IncomeField'
import { withRouter } from 'react-router-dom'
import formFields from './formFields'
import { connect } from 'react-redux'
import * as actions from '../../../../../../actions'

class IncomeForm extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = { isEditing: false }
    this.toggleEdit = this.toggleEdit.bind(this)
  }

  componentDidMount () {
    this.handleInitialize()
  }

  handleInitialize () {
    const initData = {
      income: this.props.income,
      incomeFrequency: this.props.incomeFrequency
    }
    this.props.initialize(initData)
  }

  toggleEdit () {
    this.setState({ isEditing: !this.state.isEditing })
  }
  renderFields () {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={IncomeField}
          type='text'
          label={label}
          name={name}
        />
      )
    })
  }

  onSubmit (values) {
    this.props.addIncome(values)
    this.toggleEdit()
  }

  render () {
    const { handleSubmit } = this.props

    if (this.state.isEditing) {
      return (
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <div className='row'>
              {this.renderFields()}
              <div className='col-md-4'>
                <button className='btn btn-primary btn-sm' type='submit'>
                  Update Income
                </button>
              </div>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <button
          className='btn btn-outline-primary btn-sm'
          onClick={this.toggleEdit}
        >
          Update
        </button>
      )
    }
  }
}

function validate (values) {
  const errors = {}
  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError
    }
  })
  return errors
}

export default reduxForm({
  validate,
  form: 'incomeForm'
})(connect(null, actions)(withRouter(IncomeForm)))
