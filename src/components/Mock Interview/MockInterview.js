import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './MockInterview.css'

function MockInterview() {

    const [email, setEmail] = useState({
        email:"",
    
    })

    useEffect(() => {
        const x = localStorage.getItem("email")
            
            setEmail(x) 
        

    }, )
    



    const requestMockInterview = async () => {

         
            console.log(email)
            try {

             

            const res = await fetch("http://localhost:5000/mock", {
            method:"POST",
            credentials : "include",
            headers:{
                
                "Content-Type": "application/json",
                "Accepts":"application/json"
                
            },
            body: JSON.stringify(
            {
                email
            })
           
        })

        // show errors on client side
      

        const data = await res.json()

        if(!data)
        {
            window.alert("cannot queue for mock interview try later")
        }

        console.log(data)
        let roomId = data.roomId

        // const res1 = await fetch(`http://localhost:5000/${roomId}`, {
        //     method:"GET",
        //     credentials : "include",
        //     headers:{
                
        //         "Content-Type": "application/json",
        //         "Accepts":"application/json"
                
        //     },
           
        // })      

        if(res.status == 409)
        {
            roomId = localStorage.getItem("roomId")
            window.alert("already queued for interview")
        }

        if(roomId !== undefined)
        {
            localStorage.setItem("roomId", roomId)
            window.location.href = `http://localhost:5000/${roomId}`;
        }
        
            } catch (error) {
                console.log(error)
            }
    }

  return (
    <>

        <div id="mockWrapper">

            <Navbar />

            <div id="mockContainer">

                <div id='mockHeading'>
                    <h2 id="mockHeadingText">Mock interview</h2>
                </div>
                <div id='mockDetails'>
                <p id="mockDetailsText">
                    Mock Interview is a way to test your knowledge of problem solving and CS core fundamentals. 
                    Our algorithm pairs you up witha peer who has similar experience, interests and qualifications to yours.
                    Start your mock interview right now by clicking start interview button below.
                </p>
                </div>

                <div id='startMock'>

                    <div>
                     <button className='btn' id="startMockBtn" onClick={requestMockInterview}>Start Interview</button>
                    </div>
                    

                </div>
            </div>

        </div>
        

    </>
  )
}

export default MockInterview