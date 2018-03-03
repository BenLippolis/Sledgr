import React, { Component } from 'react'
import './Options.css'

class Options extends Component {
  render () {
    return (
      <div className='jumbotron white'>
        <h3> Congrats! You've reached your goal! </h3>
        <button className='btn btn-primary'>
          Pause
        </button>
        <button className='btn btn-primary'>
          Keep same settings
        </button>
        <button className='btn btn-primary'>
          Update Settings
        </button>
      </div>
    )
  }
}

export default Options
