import React from 'react'
import Appbar from '../components/Appbar'
import Allproperties from '../components/Allproperties'
import {  useNavigate} from "react-router-dom";

const Homepage = () => {
  const localitem=localStorage.getItem("userdetails")
  const navigate = useNavigate();
  if(localitem===null){
    navigate("/");


  }
  return (
    <div>
      <Appbar/>
      <Allproperties/>
    </div>
  )
}

export default Homepage