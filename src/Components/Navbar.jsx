import React from 'react'
import "./Navbar.css";
import SiderBody from './SiderBody/SiderBody';

function Navbar() {
  return (
    <div className='main'>
        <div className='sider'>
         
            <img src='Vector.png' id='vector'/>
           <img src='Logo.png'  id='logo_pay'
           /> 
           <SiderBody
      image = "Home-Icons.png"
      text= "Home"
      />
      <div style={{display : "flex"}}>
        <img  id='invc-logo' src='invoice-logo.png' /> 
        <p className='invc'>  Invoices </p>
      </div>
      <div style={{display : "flex"}}>
        <img  id='prdt-logo' src='prdts.png' /> 
        <p className='prdt'>  Products  </p>
      </div>
      <div style={{display : "flex"}}>
        <img  id='recr-logo' src='recurr.png' /> 
        <p className='recr'>  Recurring  </p>
      </div>
      <div style={{display : "flex"}}>
        <img  id='disc-logo' src='disc.png' /> 
        <p className='disc'> Discount  </p>
      </div>
        </div>
      <div className='small_box'> 
        <div>  <p className='text'> Last 30 Days: </p></div>
        <div id='child-1'>
            <p> Paid </p>
            <text> €24.000 </text>
        </div>
        <div id='child-2'>
            <p> pending </p>
            <text> €41.000 </text>
        </div>
        <div id='child-3'>
            <p> overdue </p>
            <text> €65.600 </text>
        </div>
      </div>

      <div className='last_box'>
        <div id='profile'> <img src='Ellipse 1.png' /> </div>
        <p> Jort KKKKKKKKKKKK </p>
      </div>
    </div>
  )
}

export default Navbar
