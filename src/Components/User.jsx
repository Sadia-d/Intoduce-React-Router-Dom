import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {

    const navigate = useNavigate()

    const { id,name,email} = user;

    const handleShowDetails = () =>{
            navigate(`/user/${id}`)
    }

    return (
        <div className='border border-blue-500 mb-2 p-4 rounded-xl'>
            <h1>{name}</h1>
            <p>{email}</p>
            <Link to={`/user/${id}`} >Show Details</Link> 
            <br /> 
            <button onClick={handleShowDetails} className='btn bg-blue-400 p-2 mt-2 text-white rounded-xl'  >click show details</button>
                 </div>
    );
};

export default User;