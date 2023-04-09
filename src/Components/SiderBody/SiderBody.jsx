import React from 'react'
import "./sidebody.css";
function SiderBody({text, image }) {
  return (
    <div id='box'>
      <img id='image' src= {image}  
      />
      <p id='text'> { text}</p>
    </div>
  )
}

export default SiderBody
