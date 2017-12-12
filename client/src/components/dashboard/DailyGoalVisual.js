import React, { Component } from 'react';

class DailyGoalVisual extends Component {
    render() {
        return (
            <div>
                <div className="card one-survey">
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: '35%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="card one-survey">
                    <div className="card-body">
                    <h3 className="card-title">Daily Goal Progress Visualization</h3>
                    <h5 className="card-subtitle mb-2 text-muted">Rolling Bar Chart</h5>
                    <p className="card-text">Visualize the numbers that need to be hit every day</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DailyGoalVisual;