import React from 'react'
import axios from "axios"
import { useState } from 'react';
import "./signup.css"
import {  useNavigate} from "react-router-dom";

const Signin = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(form)
    try{
      const response=await axios.post("http://54.176.16.18:3009/api/signin",form)
        console.log(response?.data)
        if(response?.data?.status==="pass"){
          console.log("bdb")
          const serializedObject = JSON.stringify(response?.data);
          localStorage.setItem("userdetails", serializedObject);
          navigate("/homepage",{replace:true});

        }
    }
    catch(e){
      console.log(e)
    }
  }
  return (
    <div className="signup-container">
      <div className='signup-form'>
      <div class="form-group">
        <label >Email</label>
        <input  onChange={(e)=>{setForm({...form,email:e.target.value})}} type="email"  required/>
      </div>
      <div class="form-group">
        <label >Passoword</label>
        <input  onChange={(e)=>{setForm({...form,password:e.target.value})}} type="password"  required/>
      </div>
      <button onClick={handleSubmit} className="signup-button">Signin</button>

      </div>
  </div>
  )
}

export default Signin