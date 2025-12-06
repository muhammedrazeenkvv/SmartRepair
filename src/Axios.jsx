import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Axios = () => {

    const[photo,setPhotos]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((response)=>{setPhotos(response.data)})  //store data in state
        .catch((error)=> {console.log(error);})
    },[])

    function handleDelete(id){
      axios.delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(()=>{
        alert("delete")
        setPhotos(photo.filter((abc)=>abc.id !== id))
      })

      .catch((error)=>{
        console.log(error);
      })
    }
      

  return (
    <div style={{textAlign:"center", marginTop:"50px"}}>
        <h1>AXIOS</h1>
    <ul>
        {photo.map((ab)=>( <li key={ab.id}>{ab.title}{" "}
          <button onClick={()=>{handleDelete(ab.id)}}>Delete</button>

        </li>))}
    </ul>
      
    </div>
  )
}

export default Axios
