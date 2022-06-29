import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Dropdown from '../material-ui/SelectSmall'

function Navbar() {

  
  const [cookie, setCookie] = useState('');

  
  

  return (
   <>
   <nav class="navbar navbar-expand-lg ">
  <div class="navbarWrapper">



    <div className='navbarContainer'>
    
  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse pt-4" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className='px-5'><NavLink className="nav-link active mx-4 mt-2" style={{color : 'white'}} aria-current="page" to="/mock">Mock interview</NavLink></li>
      <li className='px-5'><NavLink className="nav-link active mx-4 mt-2" style={{color : 'white'}} aria-current="page" to="/practice">Practice</NavLink></li>
        
        {localStorage.getItem("email") ? 
        
        (<>
        <span classsName='mx-4'>
        <Dropdown/>
        </span>
        
        </>) 
        
        : 
        
        (

            <>
                <li className='px-5'><NavLink className="nav-link active mx-4 mt-2" style={{color : 'white'}} aria-current="page" to="/login">Login</NavLink></li>
       
                <li className='px-5'><NavLink className="nav-link active mx-4 mt-2" style={{color : 'white'}} aria-current="page" to="/signup">Register</NavLink></li>
      
            
            </>

        )
        
        }

      </ul>

    </div>

    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar