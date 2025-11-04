import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDeatils = () => {

    const navigate = useNavigate()
    const user = useLoaderData();
    const { name, email } = user;

    const goBack =()=>{
        navigate(-1)
    }

    return (
        <div>
            <div>
                <h1>Details the users </h1>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
            <button onClick={goBack} className='btn bg-blue-400 p-2 mt-2 text-white rounded-xl' >Go back</button>
        </div>
    );
};

export default UserDeatils;