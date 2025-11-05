import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='my-5'>
            
            <nav className='flex gap-8' > 
                <h1>My website</h1>
             <NavLink className={({isActive}) => isActive ? 'font-bold text-emerald-400' : ''} to="/"> Home</NavLink>
             <NavLink className={({isActive}) => isActive ? 'font-bold text-emerald-400' : ''}  to="/users">Users</NavLink>
             <NavLink className={({isActive}) => isActive ? 'font-bold text-emerald-400' : ''}  to="/about">About</NavLink>
             <NavLink className={({isActive}) => isActive ? 'font-bold text-emerald-400' : ''}  to="/contact">Contact Us</NavLink>
            </nav>

        </div>
    );
};

export default Header;