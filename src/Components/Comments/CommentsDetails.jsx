import React from 'react';
import { useLoaderData } from 'react-router';

const CommentsDetails = () => {
    const {id, name, email, body} = useLoaderData();

    return (
        <div>
            <h2>Id: {id}</h2>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>{body}</p>
        </div>
    );
};

export default CommentsDetails;<h1>Comments Details</h1>