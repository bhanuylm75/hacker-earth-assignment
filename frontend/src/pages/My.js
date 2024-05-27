import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Appbar from '../components/Appbar'

const My = () => {
  const [pro,setpro]=useState()
  const id=localStorage.getItem("userdetails")
  const parsed=JSON.parse(id)
  
  const getpro=async ()=>{
    const res= await axios.get(`http://localhost:3009/property/${parsed.userid}`)
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
    <Appbar/>
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
        </div>
      </div>
      ))}

    </div>
    </>
  )
}

export default My
