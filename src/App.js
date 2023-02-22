import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages';
import LogInPage from './pages/login';


function App() {
    return (
        <Router>
            <Route path="/" component={<Home/>} exact />
            <Route path="/login" component={<LogInPage/>} exact />
        </Router>
    );
}

export default App;