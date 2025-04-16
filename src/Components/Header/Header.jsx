import React from 'react';
import { NavLink } from 'react-router';
import './header.css'

const Header = () => {
    return (
        <div>
            <nav className='flex gap-5 justify-between'>
                <NavLink to='/'>Root</NavLink>
                <NavLink to='/app'>App</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/todos'>Todos</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/Comments'>Comments</NavLink>
           </nav>
        </div>
    );
};

export default Header;<h1>This is Header</h1>