import React from 'react';
import { Link } from 'react-router-dom';
import ConnectPlaid from './plaid/ConnectPlaid';

const Dashboard = () => {
    return (
        <div>
            <div className="jumbotron text-center branding">
                <h1> Welcome to your digital dash </h1>
                <Link to="/surveys/new" className="btn btn-primary"> New Survey </Link>
            </div>
            <ConnectPlaid />
        </div>

    );
}

export default Dashboard;