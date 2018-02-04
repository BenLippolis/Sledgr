import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
// Assign all actions creators to actions object
import * as actions from '../actions'

import Header from './layout/Header'
import Landing from './pages/Landing'
import Footer from './layout/Footer'
import SurveyNew from './surveys/SurveyNew'
import Community from './pages/Community'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import About from './pages/About'
import ProfileCreate from './profile/ProfileCreate'
import ProfileShow from './profile/profileShow/ProfileShow'

class App extends Component {
  // Life-cycle method for fetching current user
  componentDidMount () {
    // Call action creator
    this.props.fetchUser()
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className='container'>
              <Route exact path='/' component={Landing} />
              <Route path='/surveys/new' component={SurveyNew} />
              <Route path='/community' component={Community} />
              <Route path='/how-it-works' component={HowItWorks} />
              <Route path='/pricing' component={Pricing} />
              <Route path='/about' component={About} />
              <Route path='/profile/create' component={ProfileCreate} />
              <Route exact path='/profile' component={ProfileShow} />
            </div>

          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
