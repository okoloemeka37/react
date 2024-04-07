import {React,useEffect, useState} from 'react'
import '../index.css'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../Contexts/ContextProvider'
import axiosClient from '../axios';
export default function Defualt() {
    const {user,token,setUser,setToken}=useStateContext();

  

    if (!token) {

    return <Navigate to="/login" />

    }

    const onLogout=(e)=>{
      e.preventDefault();
      axiosClient.get("/logout").then(()=>{
        setUser(null)
        setToken(null)
       })
        }


    useEffect(() => { 
     axiosClient.get("/user").then(({data})=>{
      setUser(data)
  
     })
    },[])
    
    console.log(user)

  return (
    <div id='defaultLayout'>
       <nav>
  <a href="#">ZylerPost</a>
  <ul className="list">
    <li><a href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">{user.name}</a></li>
   
   <li> <a href="" className='btn-logout' onClick={onLogout}>Logout</a></li>
  </ul>

</nav>
      <div className="content">
        <header>
          <div>
            Header
          </div>
          <div>
            {user.name}
        
          

          </div>
        </header>
        <main>
        <Outlet/>
        </main>
      </div>

        
    </div>
   
  )
}
