import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import Home from './pages';
import LogInPage from './pages/login';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/login" component={LogInPage} exact />
            </Switch>
        </Router>
    );
}

export default App;