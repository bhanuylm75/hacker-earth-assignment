import React, { useState } from 'react'
//import "./property.css"
import "./signup.css"
import Appbar from '../components/Appbar'
import axios from 'axios'
import {  useNavigate} from "react-router-dom";

const Postproperty = () => {
  const navigate = useNavigate();
  const [form,setForm]=useState({
    "title": "Charming Bungalow",
    "description": "A charming bungalow with a beautiful garden.",
    "city": "Greenfield",
    "pricePerNight": 120,
    "numBedrooms": 3,
    "numBathrooms": 2,
    "owner":"6651d43a56bc11c1618ea5c6"
  })
  const submit=async ()=>{
    try{
      const res=await axios.post("http://54.176.16.18:3009/postproperty",form)
      console.log(res)
      navigate("/homepage")

    }
    catch(e){

    }
    console.log(form)

  }
  return (
    <>
    <Appbar/>
    <div class="container">
    <h1>Input Box and Description</h1>
    <div class="input-container">
      <label >Title:</label>
      <input onChange={(e)=>{setForm({...form,title:e.target.value})}}type="text"  placeholder="Enter your text here"/>
    </div>
    <div class="description-container">
      <label for="description">Description:</label>
      <textarea onChange={(e)=>{setForm({...form,description:e.target.value})}} id="description" placeholder="Enter your description here"></textarea>
    </div>
    <div class="input-container">
      <label >City:</label>
      <input required  onChange={(e)=>{setForm({...form,city:e.target.value})}} type="text"  placeholder="Enter your text here"/>
    </div>
   
    <div class="input-container">
      <label for="input">No of Bedrooms:</label>
      <input required  onChange={(e)=>{setForm({...form,numBedrooms:e.target.value})}} type="text" id="input" placeholder="Enter your text here"/>
    </div>
    <div class="input-container">
      <label >No of Bathrooms:</label>
      <input required  onChange={(e)=>{setForm({...form,numBathrooms:e.target.value})}} type="text"  placeholder="Enter your text here"/>
    </div>
    <div class="input-container">
      <label >Price per Night:</label>
      <input required  onChange={(e)=>{setForm({...form,pricePerNight:e.target.value})}}  type="text"  placeholder="Enter your text here"/>
    </div>
    <button className='button' onClick={submit}>Submit</button>
  </div>
  </>
  )
}

export default Postproperty