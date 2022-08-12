import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => (
    <div>
    <nav className='main-nav'>
        <ul>
            <li><Link to="/search">Search</Link></li>
            <li><Link exact to="/airplane">Airplane</Link></li>
            <li><Link to="/train">Train</Link></li>
            <li><Link to="/automobile">Automobile</Link></li>
        </ul>
    </nav>
    <Outlet />
    </div>
)

export default Navbar;