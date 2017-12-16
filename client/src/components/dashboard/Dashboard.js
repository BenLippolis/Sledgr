import React from 'react';
import { Link } from 'react-router-dom';
import ConnectPlaid from '../plaid/ConnectPlaid';
import SurveyList from '../surveys/SurveyList';
import DailyGoalVisual from './DailyGoalVisual';
import Network from './Network';
import Roadmap from './Roadmap';
import CreateProfile from './CreateProfile';
import ProfileList from '../profile/ProfileList';

const Dashboard = () => {
    return (
        <div>
            <div className="jumbotron text-center branding">
                <h1> Welcome to your digital dash </h1>
                <ConnectPlaid />
            </div>
            <div>
                <ProfileList />
                <CreateProfile />
                <DailyGoalVisual />
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Network />
                </div>
                <div className="col-md-6">
                    <Roadmap />
                </div>
            </div>
        </div>

    );
}

export default Dashboard;