import React, { Component } from 'react';
// import Post from './Post';
import Posts from './Posts';
import { firestore, auth} from '../firebase';
import {grabIdandData} from '../utilites';
import Authentication from './Authentication';

class Application extends Component {
    state = {
        posts: [],
        user: null,
    };

    unsubscribeFromFireStore = null;
    unsubscribeFromAuth = null;
    //Fetching Database
    componentDidMount = async () => {
        this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
                const posts = snapshot.docs.map(grabIdandData);
                this.setState({posts});
         });
         this.unsubscribeFromAuth = auth.onAuthStateChanged (user => {
            this.setState({user});
        });
    };



    componentWillUnmount = () => {
        this.unsubscribe();
    }

    render() {
        const { posts,user } = this.state;
        return (
            <main className="Application">
                <h1>My 2 cents</h1>
                <Authentication user={user} />
                <Posts 
                    posts={posts} 
                 />
            </main>
        )
    }
}

export default Application;