import React from 'react'
import Navbar from '../Navbar'
import './Profile.css'
import Sidebar from './Sidebar'
import ProfileBody from './ProfileBody'

function Profile() {
  return (
    <>


    <div id='profileOutermostWrapper'>
    <Navbar />
    
    
    <div id='profileOuterWrapper'>

      <div>
      <Sidebar />
      </div>
      
      <div className='mx-1'>
      <ProfileBody />
      </div>
      

    </div>

    </div>


    </>
  )
}

export default Profile