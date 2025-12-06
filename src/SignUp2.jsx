import React from 'react'
import { Link } from 'react-router-dom'

const SignUp2 = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form action="">
                <input type="text" placeholder='Enter Name' /><br />
                <input type="password" placeholder='Enter Password' />

                <p>AlreadyHave Account <Link to='/signin'>Login Now</Link></p>
            </form>
        </div>
    )
}

export default SignUp2
