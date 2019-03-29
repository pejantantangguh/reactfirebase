import React from 'react';
import Post from './Post';
import AddPost from './AddPost';


const Posts = ({ posts, onCreate }) => {
    return (
        <section className="Posts">
            <AddPost onCreate={onCreate}></AddPost>
            {posts.map(post => <Post {...post} key={post.id}></Post>)}
        </section>
    )
}

export default Posts;