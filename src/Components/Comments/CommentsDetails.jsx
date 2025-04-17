import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const CommentsDetails = () => {
    const {id, name, email, body} = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='flex flex-col justify-between gap-10'>
            <h2>Id: {id}</h2>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>{body}</p>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
        
    );
};

export default CommentsDetails;