import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate} from "react-router-dom";
import "./signup.css"
const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password: ''
  });
  const navigate = useNavigate();
  
  const handleSubmit=async (e)=>{
    e.preventDefault();
    console.log(form)
    try{
      const response=await axios.post("http://localhost:3009/api/signup",form)
        console.log(response)
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
      <label >Name</label>
      <input  onChange={(e)=>{setForm({...form,name:e.target.value})}} type="password"  required/>
    </div>
    <div class="form-group">
      <label >last name</label>
      <input  onChange={(e)=>{setForm({...form,lastname:e.target.value})}} type="password"  required/>
    </div>
    <div class="form-group">
      <label >Phone number</label>
      <input  onChange={(e)=>{setForm({...form,phonenumber:e.target.value})}} type="password"  required/>
    </div>

    <div class="form-group">
      <label >Email</label>
      <input  onChange={(e)=>{setForm({...form,email:e.target.value})}} type="email"  required/>
    </div>
    <div class="form-group">
      <label >Passoword</label>
      <input  onChange={(e)=>{setForm({...form,password:e.target.value})}} type="password"  required/>
    </div>
    <button onClick={handleSubmit} className="signup-button">Sign Up</button>

    </div>
</div>
  )
}

export default Signup