import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import  Header from './Header';
import Landing from './Landing';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div> 
                    <Header />
                    <Route exact path="/" component={Landing}> 
                        <Landing />
                    </Route>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;