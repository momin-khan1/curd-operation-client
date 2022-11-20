import React from 'react'

export default function AddUser() {

    const handleAddUser = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;

        const user = { name, email }

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert("User Added succesfully");
                e.target.reset();
            })
    }

    return (
        <div>
            <h1>Please added a user</h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Name' /> <br />
                <input type="email" name="email" placeholder='Email' /> <br />
                <input type="submit" value="Add User" />
            </form>
        </div>
    )
}
