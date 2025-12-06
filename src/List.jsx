import React from 'react'

const List = () => {
    const items = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Orange" },
        { id: 3, name: "Banana" }
    ]


     return (
    <div>
      {items.map((a) =>
      <li key={a.id}>{a.name}</li>
      )}
    </div>
  )
}


 


export default List

