import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoutes = () => {

    const { userName } = useSelector(state => state)

  if (userName.length >= 3) {
    return <Outlet />
   } else {
     return  <Navigate to='/' />  
   }

}

export default ProtectedRoutes