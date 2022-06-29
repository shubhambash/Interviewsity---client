import React from 'react'
import './Profile.css'
import avatar from '../../assets/prof_photo.jpg'
function Sidebar() {
  return (
    <>
    
        <div id='sidebarWrapper'>
            <div id='sidebarConatiner'>

                <div id='personalInfo'>

                    <div>
                        <img src={avatar} id='avatar'/>
                    </div>

                    <div className='px-2'>
                        <p className='personalInfo '>Shubham Kumar</p>
                        
                        <p className='personalInfo'>Rating : 450</p>
                    </div>

                </div>

                <hr style={{color : 'white'}}/>

                <div id='personalInfoLvl1'>
                

                <p className='icon'>
                    
                   <i class="fas fa-map-marker-alt icons"></i>&nbsp;&nbsp;&nbsp;&nbsp;Delhi
                    
                </p>

                <p className='icon'>
                    
                <i class="fas fa-university"></i>&nbsp;&nbsp;&nbsp;&nbsp;Delhi Technological University
             
                 </p>

                 <p className='icon'>
                    
               
                    <i class="fab fa-github"></i>&nbsp;&nbsp;&nbsp;&nbsp;@ShubhamBash
                         
                </p>

                <p className='icon'>
                    
               
                <i class="fas fa-code"></i>&nbsp;&nbsp;&nbsp;&nbsp;c++&nbsp;&nbsp;javascript
                         
                </p>

                </div>

                <hr style={{color : 'white'}}/>

                <div id='personalInfoLvl2'>
                    <p className='icon'>
                        <i class="fas fa-people-carry"></i>&nbsp;&nbsp;Behaviour : 8 / 10
                    </p>
                

               
                    <p className='icon'>
                    <i class="fas fa-eye"></i>&nbsp;&nbsp;Views : 2k
                    </p>
              

               
                    <p className='icon'>
                    <i class="fas fa-star"></i>&nbsp;&nbsp;Experience : 290
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