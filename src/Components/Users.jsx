import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {

    const users = useLoaderData();
    

    return (
        <div>
            <h1 className='text-2xl font-bold  text-center mb-4'>Our users : {users.length} </h1>
            <div className='grid grid-cols-3 gap-4 px-5'>
                {
                    users.map(user => <User 
                        key={user.id}
                        user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;