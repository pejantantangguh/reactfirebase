import React, {Component} from 'react';
import {auth} from '../firebase';

class SignUp extends Component {
    state = {displayName:'', email:'', password:''};

    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name]:value})
    };

    handleSubmit = async e => {
        e.preventDefault();
        
        const {email,password, displayName} = this.state;

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            user.updateProfile({displayName});
        } catch (error) {
            console.error(error);
        }
        this.setState({displayName:'',email:'',password:''}) // Set state to empty
    };



    render(){
        const {name,email,password} = this.state;
        return(
            <form className="SignUp" onSubmit ={this.handleSubmit}>
                <h2>Sign Up</h2>
                <input 
                    type="text"
                    name="name"
                    placeholder="Display Name"
                    value={name}
                    onChange={this.handleChange}
                    />
                <input
                    type="email"
                    name="email"
                    placeholder="sample@example.com"
                    value={email}
                    onChange={this.handleChange}
                    />

                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}
                />
                
                <input type="submit" value="Sign Up" /> 
            </form>
        );
    }
};


export default SignUp;