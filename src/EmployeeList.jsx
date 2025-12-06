import React from 'react'


const EmployeeList = () => {
  const employee = [
    { id:1, name: "razeen", position: "Manager" },
    { id:2, name: "Afthab", position: "HR" },
    { id:3, name: "Jithin", position: "Accountant" },
    { id:4, name: "Faseeh", position: "sales" }

  ]

  return (
    <div>
    {
      employee.map((a) => (
        <li key={a.id}> {a.name}--{a.position}</li>
      ))
    }
    </div>
  )
}



export default EmployeeList
