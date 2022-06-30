import React from 'react'
import './Profile.css'
import avatar from '../../assets/prof_photo.jpg'
function Sidebar({profileData}) {

    console.log(profileData)
  return (
    <>
    
        <div id='sidebarWrapper'>
            <div id='sidebarConatiner'>

                
                    <div id='personalInfo' >

                        <div>
                        
                            <img src={`https://avatars.dicebear.com/api/bottts/${profileData?.name}.svg`} id='avatar'/>
                        </div>

                        <div className='px-2'>
                            <p className='personalInfo '>{profileData?.name}</p>
                            
                            <p className='personalInfo'>Rating : {profileData?.rating}</p>
                        </div>

                        </div>

                        <hr style={{color : 'white'}}/>

                        <div id='personalInfoLvl1'>


                        <p className='icon'>

                        <i class="fas fa-map-marker-alt icons"></i>&nbsp;&nbsp;&nbsp;&nbsp;{profileData?.location}

                        </p>

                        <p className='icon'>

                        <i class="fas fa-university"></i>&nbsp;&nbsp;&nbsp;&nbsp;{profileData?.institution}

                        </p>

                        <p className='icon'>


                        <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;&nbsp;{profileData?.github}
                            
                        </p>

                        {/* <p className='icon'>


                        <i class="fas fa-code"></i>&nbsp;&nbsp;&nbsp;&nbsp;c++&nbsp;&nbsp;javascript
                            
                        </p> */}

                        </div>

                        <hr style={{color : 'white'}}/>

                        <div id='personalInfoLvl2'>
                        <p className='icon'>
                            <i class="fas fa-people-carry"></i>&nbsp;&nbsp;Behaviour : {profileData?.behaviour}
                        </p>



                        <p className='icon'>
                        <i class="fas fa-eye"></i>&nbsp;&nbsp;Views : 2k
                        </p>



                        <p className='icon'>
                        <i class="fas fa-star"></i>&nbsp;&nbsp;Experience : {profileData?.experience}
                        </p>
                        </div>

                        <hr style={{color : 'white'}}/>


                        <div id='friendsCount'>
                        <p className='icon'>
                        <i class="fas fa-users"></i>&nbsp;&nbsp;friends : 65
                        </p>
                        </div>
                    
                  
               
               


            </div>



        </div>

    </>
  )
}

export default Sidebar