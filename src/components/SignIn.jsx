import React, {Component} from 'react';
import {signInWithGoogle} from '../firebase';

class SignIn extends Component {
   state = {email:'',password:''};

   handleSubmit = e => {
       e.preventDefault();
       this.setState({email:'',password:''});
   };
   handleChange = e => {
       const {name,value} = e.target;
       this.setState({[name]:value})
   }
    render() {
        const {email,password} = this.state;
        return(
            <form className = "SignIn" onSubmit={this.handleSubmit}>
                <h2>Sign In</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="sample@example.com"
                    value= {email}
                    onChange={this.handleChange}
                    />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.handleChange}/>
                <input type="submit" value="Sign In"></input>
                <button onClick = {signInWithGoogle}>Sign In with Google</button>
            </form>
        );
    }
};

export default SignIn;