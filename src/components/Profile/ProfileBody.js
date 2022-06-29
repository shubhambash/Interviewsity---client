import React from 'react'
import './Profile.css'
import PieChart from './PieChart'
import LineChart from './LineChart'
function ProfileBody() {
  return (
    <>


        <div id='profileBodyWrapper'>
            
            <div id='profilePieChart'>

                <div>
                 <PieChart />
                </div>

                <div>
                 <PieChart />
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