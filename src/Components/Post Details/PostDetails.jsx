import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();

    return (
        <div className='p-5'>
            <h1>Post Id: {post.id}</h1>
            <h2 className='uppercase text-xl font-bold text-blue-500'>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;<h1>This is Post Details</h1>