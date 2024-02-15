// import React from 'react'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from 'react-bootstrap'

const LogoutUSER = () => {
  const navigate = new useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const handleLogout = () => {
    // Logique de déconnexion
  
    navigate("/Login");
  };
  return (

    <div>
        <Navbar />
        <button onclick={handleLogout}>logout</button>
        
    </div>
  )
}

export default LogoutUSER
