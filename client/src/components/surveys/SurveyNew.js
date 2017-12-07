import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // Component level state for review component
    // Utilize bable to avoid writing constructor
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <SurveyFormReview
                    onCancel={() => this.setState({ showFormReview: false})}
                />
            );
        } 
        return (
            <div>
            <h3> New Survey </h3> 
            <SurveyForm 
                // Callback updates state upon form submission
                onSurveySubmit={() => this.setState({ showFormReview: true })}
            />
            </div>
        );
    }

    render() {
        return (    
            <div>
                {this.renderContent()}
            </div>

        );
    }
}

export default SurveyNew;