import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return (
        <div>
            
            <nav className='flex gap-8' > 
                <h1>My website</h1>
             <Link to="/">Home</Link>
             <Link to="/users">Users</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact Us</Link>
            </nav>

        </div>
    );
};

export default Header;