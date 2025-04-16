import React from 'react';
import { useLoaderData } from 'react-router';
import Post from './Post';

const Posts = () => {
    const allPosts = useLoaderData();
    return (
        <div>
            <h1>Total Posts:{allPosts.length}</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    allPosts.map(post => <Post 
                        key={post.id}
                        post ={post} 
                        ></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;