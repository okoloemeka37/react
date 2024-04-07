import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../Contexts/ContextProvider'

export default function GuestLayout() {
  const {token}=useStateContext();
  if (token) {
   return  <Navigate to="/" />
  }
  return (
    <div>
      <nav>
  <a href="#">ZylerPost</a>
  <ul className="list">
    <li><a href="#">About</a></li>
    <li><a href="#">Projects</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Contact</a></li>
  </ul>

</nav>


        
<Outlet/>
    </div>
  )
}
