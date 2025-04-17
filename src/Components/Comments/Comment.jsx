import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import ShowComment from './ShowComment';

const Comment = ({comment}) => {
    const {id, name, email} = comment;
    const [showComment, setShowComment] = useState(false);
    const commentFetch = fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
    .then(res => res.json());

    return (
        <div className='border-2 border-amber-400 p-5 rounded-2xl flex flex-col justify-between gap-6'>
            <h2 className='uppercase font-bold text-teal-500'>{name}</h2>
            <p>{email}</p>
            <Link to={`/comments/${id}`}>
                <button className="btn btn-success">Show Comment Details</button>
            </Link>
            <button onClick={()=> setShowComment(!showComment)} className="btn btn-success">{showComment?"Hide":"Show"} Comment</button>
            <Suspense fallback={<h1>Loading....</h1>}>
                {
                    showComment&& <ShowComment commentFetch={commentFetch}></ShowComment>
                }
            </Suspense>
        </div>
    );
};

export default Comment;