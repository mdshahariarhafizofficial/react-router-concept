import React from 'react';
import { useLoaderData } from 'react-router';
import Comment from './Comment';

const Comments = () => {
    const comments = useLoaderData();
    
    return (
        <div>
            <h1 className='my-10'>Total Comments: {comments.length}</h1>
            <div className='grid grid-cols-3 gap-6'>
                {
                    comments.map(comment => <Comment 
                        key={comment.id}
                        comment={comment}></Comment>)
                }
            </div>
        </div>
    );
};

export default Comments;