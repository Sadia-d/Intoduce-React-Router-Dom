import React from 'react';
import { useLoaderData } from 'react-router';

const UserDeatils = () => {
    const user = useLoaderData();
     const { name,email,username} = user;
    return (
        <div>
            <h1>Details the users </h1>
                <h2>{name}</h2>
                <p>{email}</p>
        </div>
    );
};

export default UserDeatils;