import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Post from './Post';

const Posts = () => {
    const allPosts = useLoaderData();
    const navigate = useNavigate();
    return (
        <div>
            <div className='flex justify-between my-6'>
                <h1>Total Posts:{allPosts.length}</h1>
                <button onClick={()=>navigate('/')}>Go to Home</button>
            </div>
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