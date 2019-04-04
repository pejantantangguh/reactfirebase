import React, { Component } from 'react';
// import Post from './Post';
import Posts from './Posts';
import { firestore } from '../firebase';
import {grabIdandData} from '../utilites';

class Application extends Component {
    state = {
        posts: [],
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
        const { posts } = this.state;
        return (
            <main className="Application">
                <h1>My 2 cents</h1>
                <Posts 
                    posts={posts} 
                 />
            </main>
        )
    }
}

export default Application;