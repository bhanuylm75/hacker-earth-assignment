/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./allpro.css"
//import Card from './Card'
import axios from 'axios'
import Filter from './Filter'


const Allproperties = () => {
  const id=localStorage.getItem("userdetails")
  const userDetails=JSON.parse(id)
  console.log(userDetails)
  const [pro,setpro]=useState()

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const pros=[{
    "title": "Charming Bungalow",
    "description": "A charming bungalow with a beautiful garden.",
    "address": "123 Garden Lane",
    "city": "Greenfield",
    "state": "IN",
    "zipCode": "46140",
    "pricePerNight": 120,
    "numBedrooms": 3,
    "numBathrooms": 2,
    "owner":"6651d43a56bc11c1618ea5c6"
  }]
  const getpro= async ()=>{
    const res= await axios.get("http://localhost:3009/allpro")
    console.log(res?.data)
    const data=res?.data
    setpro(data)
    console.log(pro)
  }

  useEffect(()=>{
    getpro()

  },[])
  return (

    <>
     <h1>All Properties</h1>
    <div className='con'>
      {pro?.map((property, index) => (
        <div key={index} className="property-card">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoo2WEehMn03XduNO2h6H6GojlheCXkBzSkQ&s"} alt={property.title} className="img" />
        <div className="property-details">
          <h2>{property.title}</h2>
          <p>{property.description}</p>
          <p><strong>Location:</strong> {property.city}</p>
          <p><strong>Price Per Night:</strong> ${property.pricePerNight}</p>
          <p><strong>Bedrooms:</strong> {property.numBedrooms}</p>
          <p><strong>Bathrooms:</strong> {property.numBathrooms}</p>
          <p><strong>Posted on:</strong> {new Date(property.createdAt).toLocaleDateString()}</p>
          <button onClick={togglePopup}>I'm Interested</button>
        </div>
      </div>
      ))}
      {showPopup && <><div className="popup">
          <div className="popup-content">
            <h2>Owner Details</h2>
            <p>Name: {userDetails.name}</p>
            <p>Email: {userDetails.email}</p>
            <p>phonenumber: {userDetails.phonenumber}</p>
            <button onClick={togglePopup}>Close</button>
          </div>
        </div></>}

    </div>
    </>
  )
}

export default Allproperties