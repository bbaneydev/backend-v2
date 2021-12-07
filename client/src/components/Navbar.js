
import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link, BrowserRouter as Router } from 'react-router-dom'

export default function Navbar({ handleLogout }) {

    return (
        <Menu isOpen={false}>
            <nav>
                <Router>
                <Link to='/home'><a className='menu-item' href='/home'>Home</a></Link>
                <Link to='/profile'><a className='menu-item' href='/profile'>Your Cars</a></Link>
                <Link to='/login'><a className='menu-item' href='/login' onClick={handleLogout}>Log out</a></Link>
                <Link to='/about'><a className='menu-item' href='/about'>About</a></Link>
                </Router>
            </nav>
        </Menu>
    )
}