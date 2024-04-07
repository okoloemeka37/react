import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios';
import { useRef } from 'react';

import { useStateContext } from '../Contexts/ContextProvider'

export default function login() {
  const emailRef=useRef();
  const passwordRef=useRef()

  const{setUser,setToken}=useStateContext()
  const[error,setError]=useState();
  const [loading, setloading] = useState(false)

  

  const submit=(e)=>{
e.preventDefault();
setloading(true);

const payload={
  email:emailRef.current.value,
  password:passwordRef.current.value
}


axiosClient.post("/login",payload).then(({data})=>{
setUser(data.user);
setToken(data.token)
if (data.message=="wrong credentials") {
  setError(data.message)
}


}).catch(err=>{

  if (err.response.status===422) {
    console.log(err.response.data)
setError(err.response.data.message)
setloading(false)
  }
})


  }
  return (
  

<div className="container">
  
  <div className="brand-title">LOGIN TO YOUR ACCOUNT</div>
  <p className="err">{error}</p>
  <div className="inputs">
    <form action="" onSubmit={submit}>
    <label>EMAIL</label>
    <input ref={emailRef} type="email" placeholder="Email" />
    <label>PASSWORD</label>
    <input ref={passwordRef} type="password" placeholder="Password" />
    {loading &&(<p className='sp'><span className="loader"></span></p>)}
   <button type="submit">LOGIN</button>
    </form>
  </div>

</div>
  )
}
 