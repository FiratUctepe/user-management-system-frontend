import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [users, setUsers] = useState();

    async function fetchData() {
        const result = await axios.get("http://localhost:8080/api/users");
        setUsers(result.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <div className='container'>
                <div className='py-4'>
                    <table className="table text-center border shadow">
                        <thead >
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((user,key) => {
                                return (
                                    <tr key={key}>
                                        <th>{key+1}</th>
                                        <th>{user.name}</th>
                                        <th>{user.userName}</th>
                                        <th>{user.email}</th>
                                        <th>
                                            <button className='btn btn-primary mx-2'>View</button>
                                            <button className='btn btn-outline-primary mx-2'>Edit</button>
                                            <button className='btn btn-danger mx-2'>Delete</button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}