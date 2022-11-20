import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure! you want to delete the user")
        if (proceed) {
            console.log("Delete the usr", id)
            const url = `http://localhost:5000/user/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log("Delete")
                        const remaining = users.filter(user => user._id !== id)
                        setUsers(remaining)
                    }
                })
        }
    }
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/user/')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div>
            <h1>Availabel Users are: {users.length}</h1>
            <ul>
                {

                    users.map(user => <h4 key={user._id}>Name: {user.name}----Email: {user.email}
                        <button onClick={() => handleDelete(user._id)}>Delete</button>
                        <Link to={`/update/${user._id}`}><button>Update</button></Link>
                    </h4>)

                }
            </ul>
        </div >
    )
}
