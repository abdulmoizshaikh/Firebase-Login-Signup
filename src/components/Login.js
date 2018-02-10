import React, { Component } from 'react';
import firebase from 'firebase';
import history from '../History';


class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            email:'',
            password:''
        }
    }
    _onInputChange(event){
        this.setState({
            [event.target.name]:event.target.value
        })
        // console.log(this.state,"this.state");
    }
    _onLogIn(){
        let user={
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password
        }
        firebase.auth().signInWithEmailAndPassword(user.email,user.password)
        .then((success)=>{
            console.log(success,"success")
            alert("Congrats YOu have successfully LogIn click Ok to continue.");
            history.push('./home');
    })
        .catch((error)=>{console.log(error.message,"error.message");
        alert(error.message,"error.message");
    })
        }


    render() {
        return (
            <div>
                <h1>Login</h1>
                <label>Email :<input type="email" name="email"  onChange={this._onInputChange.bind(this)}/></label><br/>
                <label>Password :<input type="Password" name="password" onChange={this._onInputChange.bind(this)} /></label><br/>
                 <button onClick={this._onLogIn.bind(this)}>LogIn</button>               
            </div>
        );
    }

}

export default Signup;