import React from 'react'
import Signin from '../components/Signin'
import Signup from '../components/Signup'
import "./auth.css"
const Auth = () => {
  return (
    <div className='conn'>
      <Signup/>
      <Signin/>
      </div>
  )
}

export default Auth