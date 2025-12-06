import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState([])
    const [username, setName] = useState("") //new user name
    const [email, setEmail] = useState("") //new user email
    const [editId,setEditId]=useState(null)  
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => { setUsers(response.data) })
            .catch((error) => { console.log(error); })
    }, [])

    function handleDelete(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(() => {
                alert("deleted")
                setUsers(users.filter((abc) => abc.id !== id))
            })
            .catch((error) => {
                console.log(error);
            })
    }

    //Post-add new user
    const handleAdd = () => {
        if (username.trim() === "" || email.trim() === "") {
            alert("please enter name and email")
            return
        }
        const newUser = { username, email }

        axios.post("https://jsonplaceholder.typicode.com/users", newUser)
            .then((response) => {
                alert("user added successfully")
                setUsers([...users, response.data])  //add new usr to list
                setName("")
                setEmail("")
            })
            .catch((error) => console.log(error))
    }

    //edit--fill inputs with selected users data
    function handleEdit(user){
        setEditId(user.id)
        setName(user.username)
        setEmail(user.email)
    }

    //put- update user

    const handleUpdate=()=>{
        const updateUser = {username,email};

        axios
        .put(`https://jsonplaceholder.typicode.com/users/${editId}`,updateUser)
        .then((response)=>{
            alert("user update successfully");
            setUsers(users.map((u)=>(u.id===editId?{...u,...response.data}:u)))
            setEditId(null);
            setName("");
            setEmail("");
            
        })

    }

    return (
        <div>
            <div>
                <input type="text" placeholder="enter name" value={username} onChange={(e) => setName(e.target.value)} />
                {" "}
                <input type="text" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {" "}
                {/* <button onClick={handleAdd}>Add User</button> */}

                {editId ?(
                    <button onClick={handleUpdate}>Update</button>
                ):(
                    <button onClick={handleAdd}>Add</button>
                )}
            </div>
            <ul>
                {users.map((ab) => (<li key={ab.id}>{ab.username} --{ab.email}--
                    <button onClick={()=>{handleEdit(ab)}}> Edit</button>
                    <button onClick={() => { handleDelete(ab.id) }}>Delete</button>
                </li>))}
            </ul>
        </div>
    )
}

export default Users