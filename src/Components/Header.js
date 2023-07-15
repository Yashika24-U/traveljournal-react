import React from "react"
import Logo from "../Images/logo.png"

export default function Header()
{
  return(
    <div>
      <div className = "header">
      <img className= "header--img" src = {Logo}/>
      <p>my travel journal.</p> 
      </div>
    </div>
)}