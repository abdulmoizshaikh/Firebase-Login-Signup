import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import History from './History';
import Navbar from './components/Navbar';
import Home from './components/Home';


class RouterComp extends Component {
    render() {
        return (
            <Router history={History}>
                <div>
                    <Navbar />                
                    <br/>
                    <Route exact path="/" component={Signup} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/home" component={Home} />
                    
                    
                </div>
            </Router>
        );
    }

}

export default RouterComp;