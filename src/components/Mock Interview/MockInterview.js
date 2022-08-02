import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import './MockInterview.css'

function MockInterview() {

    const [email, setEmail] = useState({
        email:"",
    })
    const [isTrue, setIsTrue] = useState(true)

    useEffect(() => {
        const x = localStorage.getItem("email")
            
            setEmail(x) 
        

    }, )

    const callApi = () => {
        if(isTrue)
        {
            requestMockInterview()
            setIsTrue(false)

            setTimeout(() => {
                setIsTrue(true)
            }, 1000)
        }
    }
    



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

        if(res.status === 422)
        {
            window.alert("cannot queue for mock interview try later")
        }
        else
        {
            let roomId = data.roomId

        

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
                     <button className='btn' id="startMockBtn" onClick={callApi}>Start Interview</button>
                    </div>
                    

                </div>
            </div>

        </div>
        

    </>
  )
}

export default MockInterview