import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {

    return (
        <div className='header'>
            <Link to="/">Home</Link>
            <Link to="user/add">Add User</Link>
            <Link to="/update/:id">Update</Link>
        </div>
    )
}
