import React from 'react';
import { Link } from 'react-router';

const Comment = ({comment}) => {
    const {id, name, email} = comment;
    return (
        <div className='border-2 border-amber-400 p-5 rounded-2xl flex flex-col justify-between'>
            <h2 className='uppercase font-bold text-teal-500'>{name}</h2>
            <p>{email}</p>
            <Link to={`/comments/${id}`}>
                <button className="btn btn-success">Show Comment</button>
            </Link>
        </div>
    );
};

export default Comment;