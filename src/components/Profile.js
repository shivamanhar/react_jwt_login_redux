import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export default function Profile() {

    const {user:currentUser} = useSelector((state)=>state.auth);

    if (!currentUser){
        return <Navigate to="/" />
    }
  return (
    <div>
      <h1> Profile page</h1>
    </div>
  )
}
