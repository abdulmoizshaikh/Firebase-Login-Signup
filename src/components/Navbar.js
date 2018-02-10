import React, { Component } from 'react';
// import History from '../History';
import {Link} from 'react-router-dom';
// import {Router} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <br/>
                <Link to='/'><button>Signup</button></Link>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/"><button>logout</button></Link>
                <Link to="/home"><button>Home</button></Link>
            </nav>

        );
    }

}

export default Navbar;