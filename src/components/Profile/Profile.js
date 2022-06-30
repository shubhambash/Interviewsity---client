import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './Profile.css'
import Sidebar from './Sidebar'
import ProfileBody from './ProfileBody'

function Profile() {

  const [profileData, setProfileData] = useState(null);
  const email = localStorage.getItem("email")
  useEffect(() => {
    getProfileData(email)
  }, [])


  const getProfileData = async (email) => {

   
    if(!email)return;
    try {


      const res = await fetch(`http://localhost:5000/profiledata/${email}`, {
        method:"GET",
        credentials: 'include',
        headers:{
            
            "Content-Type": "application/json",
            "Accepts":"application/json"
            
        },
       
    })


    if(res.status === 200)
    {
      const data = await res.json();

      setProfileData(data)
      console.log(data)
    }



      
    } catch (error) {
      console.log(error)
    }


  }

  return (
    <>


    <div id='profileOutermostWrapper'>
    <Navbar />
    
    
    <div id='profileOuterWrapper'>

      <div>
      <Sidebar profileData = {profileData}/>
      </div>
      
      <div className='mx-1'>
      <ProfileBody profileData = {profileData} />
      </div>
      

    </div>

    </div>


    </>
  )
}

export default Profile