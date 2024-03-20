import React from 'react'

const Login = () => {
  return (
    <>
       <h1>Login</h1>
       <form
       >
      <label htmlFor='email'>email</label>
        <input type='email' placeholder='email'  id='email' />
        <label htmlFor='password'>password</label>
        <input type='password' placeholder='password' id='password'/>

        <button type='button'>login</button>
        
      </form>
      
    </>
  )
}

export default Login
