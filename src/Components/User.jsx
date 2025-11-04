import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const { id,name,email,username} = user;
    return (
        <div className='border border-blue-500 mb-2 p-4 rounded-xl'>
            <h1>{name}</h1>
            <p>{email}</p>
            <Link to={`/user/${id}`} >Show Details</Link>  
                 </div>
    );
};

export default User;