import React, {Component} from 'react';

class SignUp extends Component {
    state = {displayName:'', email:'', password:''};

    handleSubmit = e => {
        e.preventDefault();
        this.setState({displayName:'',email:'',password:''})
    }

    handleChange = e => {
        const {name,value} = e.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email,password} = this.state;
        return(
            <form className="SignUp" onSubmit ={this.handleSubmit}>
                <h2>Sign Up</h2>
                <input 
                    type="text"
                    name={displayName}
                    placeholder="Display Name"
                    value={displayName}
                    onChange = {this.handleChange}
                    />
                <input
                    type="email"
                    name={email}
                    placeholder="sample@example.com"
                    value={email}
                    onChange = {this.handleChange}
                    />

                <input 
                    type="password"
                    name={password}
                    placeholder="Password"
                    value={password}
                    onChange = {this.handleChange}
                />
                
                <input type="submit" value="Sign Up" /> 
            </form>
        );
    }
};


export default SignUp;