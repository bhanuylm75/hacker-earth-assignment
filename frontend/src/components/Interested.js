import React from 'react'
import "./in.css"

const Interested = () => {
  const id=localStorage.getItem("userdetails")
  const user=JSON.parse(id)
  return (
    <div className="popup-overlay">
      <h2>User Details</h2>
        <div className="user-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
    </div>
  )
}

export default Interested
