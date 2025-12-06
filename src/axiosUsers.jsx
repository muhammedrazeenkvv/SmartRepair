import React, { useState } from 'react'

const axiosUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => { setUsers(response.data) })  //store data in state
            .catch((error) => { console.log(error); })
    }, [])

    function handleDelete(id){
      axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(()=>{
        alert("delete")
        setPhotos(photo.filter((abc)=>abc.id !== id))
      })

      .catch((error)=>{
        console.log(error);
      })
    }
        
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <ul>
                {users.map(() => (
                    <li key={ab.id}>{ab.title}{" "}
                        <button onClick={() => { handleDelete(ab.id) }}>Delete</button>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default axiosUsers
