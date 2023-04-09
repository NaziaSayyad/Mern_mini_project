import React from 'react'
import "./mainbody.css";
import Data from './data/data';
function Mainbody() {
  return (
    <>
    <div style={{marginTop : "18%",marginLeft: "23%"}}>
        <div>
        <div id='box-1'> 
        <p> Recurring Invoices </p>
        </div>
      
            <div id='box-2'> 
            <p> Add recurring invoice </p>
            <img src='addbtn.png' />

            </div>
        </div>
        

        {/*  Recuring invoices Revenu Boxes  */}

        <div id='parent'>
            <div id='invoices'> 
                <p> # recurring invoices </p>
                <text> 215 </text>
            </div>
            <div id='invoices'> 
                <p> # recurring revenue </p>
                <text> €2500/month </text>
            </div>
            <div id='invoices'> 
                <p> # recurring overdue </p>
                <text> 22 </text>
            </div>

        </div>
    </div>
    <div id='cilent-frame'>

       <p> Per client </p>
       <div style={{display :'flex'}}> 
            <div id='search-client'> 
                <p> Search Client </p>
                
            </div>
            <div id='search'> 
                    {/* <p> search </p> */}
                    <img src='search_btn.png' />  
                </div>
       </div>
    </div>
    <div id='content-nav'>
        <p id='cli'> client </p>
        <p id='send'> #send </p>
        <p id='end-date'> End Date </p>
        <p id='interval'> Interval </p>
        <p id='amount'> Amount  </p>
        <p id='edit'> Edit </p>

    </div>
    <div id='main-content'>
        <Data />
        <Data />
        <Data />
        <Data />
        <Data />
    </div>
    </>
  )
}

export default Mainbody

/* display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 15px;

width: 283px;
height: 55px;


/* Inside auto layout */

// flex: none;
// order: 0;
// flex-grow: 0
