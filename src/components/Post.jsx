import React from 'react';
import moment from 'moment';

const Post = ({ title, content, user, stars, comments, createdAt }) => {
    return (
        <article className="Post">
            <div className="Post--content">
                <h3>{title}</h3>
                <div>{content}</div>
            </div>
            <div className="Post--meta">
                <div>
                    <p>
                        <span role="img" aria-label="star">
                            ⭐️
        </span>
                        {stars}
                    </p>
                    <p>
                        <span role="img" aria-label="comments">
                            🙊
        </span>
                        {comments}
                    </p>
                    <p>Posted by {user.displayName}</p>
                    <p>{moment(createdAt).calendar()}</p>
                </div>
                <div>
                    <button className="star">Star</button>
                    <button className="delete">Delete</button>
                </div>
            </div>
        </article>
    );
};

Post.defaultProps = {
    id: '1',
    title: 'A sample 100',
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit repellendus modi unde cumque, fugit in ad necessitatibus eos sed quasi et! Commodi repudiandae tempora ipsum fugiat. Quam, officia excepturi!',
    user: {
        uid: '123',
        displayName: 'Bill Sample',
        email: 'Bill@sample.com',
        photoURL: 'https://www.fillmurray.com/300/300',
    },
    stars: 1,
    comments: 57,
    createdAt: new Date(),
    stars: 0,
    comments: 0,
}

export default Post;