import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const usersData = useLoaderData();
    
    return (
        <div>
            <h1>Users: {usersData.length}</h1>
        </div>
    );
};

export default Users;