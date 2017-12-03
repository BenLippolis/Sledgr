import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
// Assign all actions creators to actions object 
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Footer from './Footer';

class App extends Component {
    // Life-cycle method for fetching current user
    componentDidMount() {
        // Call action creator 
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div> 
                        <Header />
                        <Route exact path="/" component={Landing}> 
                        </Route>
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);