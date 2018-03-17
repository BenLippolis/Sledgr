import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Header from './layout/Header'
import Landing from './pages/static/Landing'
// import Footer from './layout/Footer'
import Community from './pages/static/Community'
import HowItWorks from './pages/static/HowItWorks'
import Pricing from './pages/static/Pricing'
import About from './pages/static/About'
import './App.css'

class App extends Component {
  componentDidMount () {
    this.props.fetchUser()
  }

  render () {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className='back-ground'>
              <div className='container'>
                <Route exact path='/' component={Landing} />
                <Route path='/community' component={Community} />
                <Route path='/how-it-works' component={HowItWorks} />
                <Route path='/pricing' component={Pricing} />
                <Route path='/about' component={About} />
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App)
