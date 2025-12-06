import React from 'react'
import "./register.css"

const Register = () => {
  return (
    <div>
        <div className='container'>
      <h2>Registration Form</h2>
      <form action="" >
        <input type="text" className='fistName ' placeholder='First Name' />
        <input type="text" className='lastName' placeholder='Last Nmae' /><br />
        <input type="date" className='date' />
        <label htmlFor="">Gender</label>
        <input type="radio" name='gender' id='001' />Female
        <input type="radio" name='gender' id='002' />Male
        <input type="radio" name='gender' id='003' />Other
        <br />
        <input type="email" className='email' placeholder='E-mail' />
        <input type="number" className='phone' placeholder='Phone Number'/><br />
        <select name="" id="" className='option'>
            <option value="">choose Option</option>
        </select>
        <br />
        <button>Submit</button>


      </form>
      </div>
    </div>
  )
}

export default Register
