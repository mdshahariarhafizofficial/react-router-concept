import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    
    const {id, title, body} = post;
    return (
        <div className='flex flex-col justify-between border-2 border-amber-300 rounded-xl  p-5'>
            <h2 className='uppercase text-xl font-bold text-blue-500'>{title}</h2>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>
            <button className="btn">Details</button>
            </Link>
        </div>
    );
};

export default Post;