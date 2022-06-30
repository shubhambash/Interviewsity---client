import React from 'react'
import './Profile.css'
import PieChart from './PieChart'
import LineChart from './LineChart'
function ProfileBody({profileData}) {
  const profiles = "profiles";
  const languages = "languages";

  return (
    <>


        <div id='profileBodyWrapper'>
            
            <div id='profilePieChart'>

                <div>
                <PieChart profileData = {profileData} type = {languages}/>

                </div>

                <div>
                 <PieChart profileData = {profileData} type = {profiles}/>
                </div>
                

            </div>


            <div id='profileLineChart'>

                <LineChart height={"300px"}/>


            </div>

        </div>


        {/* <PieChart />
        <PieChart /> */}

    </>
  )
}

export default ProfileBody