import React, { useState } from 'react'
import {Input} from '../ui'

const Register = () => {

 const [username, setName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')


  return (
    <div className='container flex justify-center'>
      <form>
        <img className='mb-4 flex justify-center' src="../constants/photo_2024-02-12_15-51-02.jpg" alt="logo" />
    <h1 className="mb-3 text-[30px] font-semibold">Please register</h1>

      <Input label={"Username"} state={username} setState={setName}/>   
      <Input label={"Email address"} type='email' state={email} setState={setEmail}/> 
      <Input label={"Password"} type='password' state={password} setState={setPassword}/>  
    
    <button class=" w-full mt-12 p-3 rounded-md bg-blue-600 text-white text-xl" type="submit">Register</button>

  </form>
    </div>
  )
}

export default Register