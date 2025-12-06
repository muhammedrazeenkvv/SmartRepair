import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <form action="">
                <input type="text" placeholder='Enter Name' /><br />
                <input type="password" placeholder='Enter Password' />
                <p>Click here to <Link to='/'>register</Link></p>

            </form>
        </div>
    )
}

export default SignIn
