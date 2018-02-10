import React, { Component } from 'react';
import firebase from 'firebase';
import history from '../History';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            email: '',
            password: ''
        }
    }
    _onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        // console.log(this.state, "this.state");
    }
    _onSignUp() {
        let user = {
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password
        }
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((success)=>{
            console.log(success,"success")
            alert("Congrats YOu have successfully sign up click Ok to continue.");
            history.push('./login');
    })
        
        
        .catch((error)=>{console.log(error.message,"error.message");
        alert(error.message,"error.message");
    })
    }


    render() {
        return (
            <div>
                <h1>Signup</h1>
                <label>User name :<input type="text" name="userName" onChange={this._onInputChange.bind(this)} /></label><br />
                <label>Email :<input type="email" name="email" onChange={this._onInputChange.bind(this)} /></label><br />
                <label>Password :<input type="Password" name="password" onChange={this._onInputChange.bind(this)} /></label><br />
                <button onClick={this._onSignUp.bind(this)}>Signup</button>
            </div>
        );
    }

}

export default Signup;