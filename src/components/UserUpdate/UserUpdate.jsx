
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserUpdate() {
    const { id } = useParams()

    const [user, setUser] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/user/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleDeleteUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;

        const updateUser = { name, email }

        const url = `http://localhost:5000/user/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Are You Sure!! You want to update the user informetion")
                e.target.reset();
            })
    }
    return (
        <div>
            <h1>User Update: {user.name}</h1>
            <form onSubmit={handleDeleteUser}>
                <input type="text" name="name" placeholder='Name' /> <br />
                <input type="email" name="email" placeholder='Email' /> <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    )
}
