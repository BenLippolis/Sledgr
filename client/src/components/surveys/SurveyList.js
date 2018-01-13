import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSurveys } from '../../actions'
import '../../styles/SurveyList.css'
// Need to connect to Redux in order to call action creator to fetch list of surveys

class SurveyList extends Component {
  componentDidMount () {
    this.props.fetchSurveys()
  }

  renderSurveys () {
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className='card one-survey' key={survey._id}>
          <div className='card-body'>
            <h3 className='card-title'>Title: {survey.title} </h3>
            <h5 className='card-subtitle mb-2 text-muted'>
              Body: {survey.body}{' '}
            </h5>
            <p className='card-text'>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div className='all'>
        {this.renderSurveys()}
      </div>
    )
  }
}

function mapStateToProps (state) {
  // In combine resucers we assign reducer value to 'surveys'
  return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList)
