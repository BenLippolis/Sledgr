import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Bar } from 'react-chartjs-2'

class Chart extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chartData: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: 'Account Balance',
            data: [375, 360, 320, 300, 279, 245, 220, 200],
            backgroundColor: [
              '#8003a6',
              '#8003a6',
              '#8003a6',
              '#8003a6',
              '#8003a6',
              '#8003a6',
              '#8003a6'
            ]
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle: false
  }

  render () {
    return (
      <div className='chart'>
        <Bar
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              display: this.props.displayTitle,
              text: 'Account Balance',
              fontSize: 20
            },
            legend: {
              display: false
            },
            layout: {
              padding: {
                left: 50,
                right: 50,
                bottom: 0,
                top: 0
              }
            },
            scales: {
              yAxes: [
                {
                  display: true,
                  ticks: {
                    suggestedMin: 0
                  }
                }
              ]
            }
          }}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { goals: state.goals }
}

export default connect(mapStateToProps)(Chart)
