import React,{useEffect,useState} from 'react'

const Fetching = () => {
    
    const [data,setData]= useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then((res) => setData(res))
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Fetching
