import React, { Component } from 'react';
// import Post from './Post';
import Posts from './Posts';
import { firestore } from '../firebase';
import {grabIdandData} from '../utilites';
import Authentication from './Authentication';

class Application extends Component {
    state = {
        posts: [],
        user: null,
    };

    unsubscribe = null;
    //Fetching Database
    componentDidMount = async () => {
        // const snapshot = await firestore.collection('posts').get();
        // snapshot.forEach(doc => {
        //     const id = doc.id;
        //     const data = doc.data;
        //     console.log({id},{data});
        // });
        // const posts = snapshot.docs.map(grabIdandData);
        // console.log(posts);

        // this.setState({posts});
        this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
                const posts = snapshot.docs.map(grabIdandData);
                this.setState({posts});
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