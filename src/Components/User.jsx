import React from 'react';

const User = ({user}) => {

    const {name,email,username} = user;
    return (
        <div className='border border-blue-300 mb-2 p-4 rounded-xl'>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
};

export default User;