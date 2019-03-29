import React, { Component } from 'react';
// import Post from './Post';
import Posts from './Posts';
import { firestore } from '../firebase';

class Application extends Component {
    state = {
        posts: [
            {
                id: '1',
                title: 'A sample 1',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
                user: {
                    uid: '123',
                    displayName: 'Bill Sample',
                    email: 'Bill@sample.com',
                    photoURL: 'https://www.fillmurray.com/300/300',
                },
                stars: 1,
                comments: 57,
            },
            {
                id: '2',
                title: 'A sample 2',
                content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
                user: {
                    uid: '321',
                    displayName: 'Seagal Sample',
                    email: 'Bill@sample.com',
                    photoURL: 'https://www.stevensegallery.com/300/300',
                },
                stars: 1,
                comments: 57,
            },
        ],
    };

    componentDidMount = () => {
        const posts = firestore.collection('posts').get()
            .then(snapshot => {
                console.log(snapshot);
            });

        console.log({ posts });
    }

    handleCreate = post => {
        const { posts } = this.state;
        this.setState({ posts: [post, ...posts] });
    }
    render() {
        const { posts } = this.state;
        return (
            <main className="Application">
                <h1>My 2 cents</h1>
                <Posts posts={posts} onCreate={this.handleCreate}></Posts>
            </main>
        )
    }
}

export default Application;